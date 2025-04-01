import React from "react";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { About, Contact, Home, Projects } from "./pages";
import { AudioProvider } from "./contexts/AudioContext";
import { Footer } from "./components";
import AudioPlayer from "./components/AudioPlayer";
import CustomCursor from "./components/CustomCursor";

// Create a wrapper component to handle conditional footer rendering
const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={
          <>
            <Contact />
            <Footer />
          </>
        } />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <main className="bg-slate-300/20 h-full">
      <AudioProvider>
        <Router>
          <CustomCursor />
          <AppContent />
          <AudioPlayer />
        </Router>
      </AudioProvider>
    </main>
  );
};

export default App;
