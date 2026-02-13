import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Photos from './pages/Photos';
import Video from './pages/Video';
import About from './pages/About';

import { userImages } from './constants/images';

import { Analytics } from "@vercel/analytics/react"

function App() {
  // Preload first batch of images for instant Gallery load
  React.useEffect(() => {
    const preloadImages = () => {
      const imagesToPreload = userImages.slice(0, 12);
      imagesToPreload.forEach((image) => {
        const img = new Image();
        img.src = `/images_optimized/${image}`;
      });
    };

    if (document.readyState === 'complete') {
      preloadImages();
    } else {
      window.addEventListener('load', preloadImages);
      return () => window.removeEventListener('load', preloadImages);
    }
  }, []);
  return (
    <Router>
      <div className="bg-tech-bg min-h-screen text-tech-accent selection:bg-tech-primary selection:text-black font-sans flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/video" element={<Video />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer className="py-8 text-center border-t border-tech-muted/30">
          <p className="font-mono text-xs text-tech-muted">
            © {new Date().getFullYear()} NICK_ROEHM. SYSTEM_ONLINE.
          </p>
        </footer>
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
