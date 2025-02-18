import { useEffect } from "react";
import { useAudio } from "../contexts/AudioContext";
import { soundoff, soundon } from "../assets/icons";

const AudioPlayer = () => {
  const { audioRef, isPlayingMusic, setIsPlayingMusic } = useAudio();

  useEffect(() => {
    const audio = audioRef.current;

    if (isPlayingMusic) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Playback prevented:", error);
          setIsPlayingMusic(false);
        });
      }
    } else {
      audio.pause();
    }

    // Cleanup function
    return () => {
      // Don't pause on unmount if music should be playing
      if (!isPlayingMusic) {
        audio.pause();
      }
    };
  }, [isPlayingMusic, setIsPlayingMusic]);

  // Update or add the styling for the container
  const styles = {
    container: {
      position: 'fixed',
      bottom: '20px',
      left: '20px',
      zIndex: 1000, // This ensures it stays on top of other elements
    }
  };

  return (
    <div style={styles.container}>
      <img
        src={!isPlayingMusic ? soundoff : soundon}
        alt='jukebox'
        onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        className='w-10 h-10 cursor-pointer object-contain'
      />
    </div>
  );
};

export default AudioPlayer; 