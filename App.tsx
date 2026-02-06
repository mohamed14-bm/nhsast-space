import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StarField from './components/StarField';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import About from './pages/About';
import Resources from './pages/Resources';
import StudyGuide from './pages/StudyGuide';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen text-white font-sans selection:bg-accent-cyan selection:text-black">
        <StarField />

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/study-guide" element={<StudyGuide />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <Footer />
        </div>

        <BackToTop />
      </div>
    </Router>
  );
};

export default App;