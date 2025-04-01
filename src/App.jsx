import React from "react";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import { About, Contact, Home, Projects } from "./pages";
import { AudioProvider } from "./contexts/AudioContext";
import { Footer } from "./components";
import AudioPlayer from "./components/AudioPlayer";
import CustomCursor from "./components/CustomCursor";
import PageTransition from "./components/PageTransition";

// Create a wrapper component to handle conditional footer rendering
const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <PageTransition>
              <Home />
            </PageTransition>
          } />
          <Route path="/about" element={
            <PageTransition>
              <About />
            </PageTransition>
          } />
          <Route path="/projects" element={
            <PageTransition>
              <Projects />
            </PageTransition>
          } />
          <Route path="/contact" element={
            <PageTransition>
              <>
                <Contact />
                <Footer />
              </>
            </PageTransition>
          } />
        </Routes>
      </AnimatePresence>
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
