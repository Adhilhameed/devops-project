import { useEffect, useRef, useState } from 'react';
import './About.css';

const SKILLS = [
  { name: 'Docker & Docker Compose', pct: 75 },
  { name: 'CI/CD / GitHub Actions', pct: 75 },
  { name: 'Prometheus & Grafana', pct: 65 },
  { name: 'React', pct: 70 },
  { name: 'Linux / WSL2', pct: 70 },
  { name: 'AWS / Cloud', pct: 65 },
];

export default function About() {
  const [animated, setAnimated] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (skillsRef.current) obs.observe(skillsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="about" id="about">
      <div className="section-header reveal">
        <span className="section-num">01.</span>
        <h2 className="section-title">About</h2>
        <div className="section-line" />
      </div>

      <div className="about-grid">
        <div className="about-text reveal">
          <p>
            I'm an <strong>Aspiring Cloud & DevOps Engineer</strong> currently
            interning at Ovniq Technologies. I'm passionate about learning how
            modern infrastructure works and building{' '}
            <span className="highlight">
              reliable and automated systems
            </span>
            .
          </p>

          <p>
            During my internship and personal projects, I've gained hands-on
            experience with <strong>Docker</strong> for containerization,{' '}
            <strong>GitHub Actions</strong> for CI/CD pipelines, and building
            a full observability platform using{' '}
            <strong>Prometheus and Grafana</strong>. I enjoy learning by
            doing — setting things up, breaking them, and fixing them.
          </p>

          <p>
            I'm currently focused on deepening my understanding of{' '}
            <span className="highlight">
              DevOps practices, cloud infrastructure, and monitoring systems
            </span>{' '}
            to grow into a strong Cloud/DevOps engineer.
          </p>
        </div>

        <div className="about-skills reveal" ref={skillsRef}>
          {SKILLS.map(skill => (
            <div className="skill-item" key={skill.name}>
              <div className="skill-header">
                <span>{skill.name}</span>
                <span>{skill.pct}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-fill"
                  style={{ width: animated ? `${skill.pct}%` : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}