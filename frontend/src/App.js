import { useEffect, useState } from 'react';
import './index.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [progress, setProgress] = useState(0);

  // Custom cursor
  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setTrail(cursor), 80);
    return () => clearTimeout(t);
  }, [cursor]);

  // Scroll progress
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress((window.scrollY / total) * 100);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Reveal on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    const els = document.querySelectorAll('.reveal');
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <div className="cursor" style={{ left: cursor.x, top: cursor.y }} />
      <div className="cursor-trail" style={{ left: trail.x, top: trail.y }} />

      {/* Atmosphere */}
      <div className="noise" />
      <div className="scanlines" />
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      {/* Layout */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>

      <footer>
        <div className="footer-text">
          © 2026 <span>Adhil Hameed</span>. Built with React + Docker + GitHub Actions.
        </div>
        <div className="footer-text">
          Designed & Developed with <span>♥</span>
        </div>
      </footer>
    </>
  );
}

export default App;