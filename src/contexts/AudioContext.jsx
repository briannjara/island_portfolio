import { createContext, useContext, useRef, useState, useEffect } from "react";
import sakura from "../assets/sakura.mp3";

const AudioContext = createContext();

export function AudioProvider({ children }) {
  const audioRef = useRef(new Audio(sakura));
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0.4;
    audio.loop = true;

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <AudioContext.Provider value={{ audioRef, isPlayingMusic, setIsPlayingMusic }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  return useContext(AudioContext);
} 