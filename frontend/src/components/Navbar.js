import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['About', 'Projects', 'Skills', 'Experience', 'Education', 'Contact'];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">
        <span className="bracket">{'{ '}</span>ADHIL<span className="bracket">{' }'}</span>
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map((item, i) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              data-num={`0${i + 1}.`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
        <span className={menuOpen ? 'open' : ''}></span>
        <span className={menuOpen ? 'open' : ''}></span>
        <span className={menuOpen ? 'open' : ''}></span>
      </button>
    </nav>
  );
}