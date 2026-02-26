import { useState, useEffect } from 'react';
import './Hero.css';

const ROLES = [
  'DevOps Engineer',
  'Docker & CI/CD Expert',
  'Cloud Architect',
  'React Developer',
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayRole, setDisplayRole] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = ROLES[roleIdx];
    let i = 0;
    if (typing) {
      const t = setInterval(() => {
        setDisplayRole(role.slice(0, i + 1));
        i++;
        if (i === role.length) { clearInterval(t); setTimeout(() => setTyping(false), 1800); }
      }, 60);
      return () => clearInterval(t);
    } else {
      let j = role.length;
      const t = setInterval(() => {
        setDisplayRole(role.slice(0, j - 1));
        j--;
        if (j === 0) {
          clearInterval(t);
          setRoleIdx(prev => (prev + 1) % ROLES.length);
          setTyping(true);
        }
      }, 40);
      return () => clearInterval(t);
    }
  }, [roleIdx, typing]);

  return (
    <section className="hero" id="hero">
      <div className="hero-grid" />
      <div className="hero-glow" />

      <div className="hero-content">
        <div className="hero-tag">Available for opportunities</div>

        <h1 className="hero-name">
          Adhil<br />
          <span className="line2">Hameed<span className="accent">.</span></span>
        </h1>

        <p className="hero-role">
          {displayRole}<span className="cursor-blink" />
        </p>

        <p className="hero-desc">
          Building robust systems that scale. I architect cloud infrastructure,
          automate deployments, and craft React applications with a focus on
          performance and developer experience.
        </p>

        <div className="hero-ctas">
          <a href="#projects" className="btn-primary">
            <span>View My Work</span><span>→</span>
          </a>
          <a href="#contact" className="btn-outline">Let's Talk</a>
        </div>
      </div>

      <div className="hero-stats">
        <div className="stat">
          <div className="stat-num">1</div>
          <div className="stat-label">Years Exp.</div>
        </div>
        <div className="stat">
          <div className="stat-num">20+</div>
          <div className="stat-label">Projects</div>
        </div>
        <div className="stat">
          <div className="stat-num">99%</div>
          <div className="stat-label">Uptime SLA</div>
        </div>
      </div>
    </section>
  );
}