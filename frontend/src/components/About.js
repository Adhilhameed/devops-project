import { useEffect, useRef, useState } from 'react';
import './About.css';

const SKILLS = [
  { name: 'React / Next.js', pct: 90 },
  { name: 'Node.js / Express', pct: 85 },
  { name: 'Docker / Kubernetes', pct: 88 },
  { name: 'CI/CD / GitHub Actions', pct: 92 },
  { name: 'AWS / Cloud', pct: 80 },
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
            I'm a <strong>DevOps & Cloud Support</strong> passionate about building
            systems that are reliable, scalable, and maintainable. My work lives at the
            intersection of <span className="highlight">development and operations</span>.
          </p>
          <p>
            I specialize in containerizing applications with <strong>Docker</strong>, setting
            up automated pipelines with <strong>GitHub Actions</strong>, and deploying to
            cloud platforms. Every system I build is production-ready from day one.
          </p>
          <p>
            When I'm not writing code, I'm exploring new DevOps tools, contributing to open
            source, and refining my approach to{' '}
            <span className="highlight">Infrastructure as code</span>.
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