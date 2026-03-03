import { useEffect, useRef, useState } from 'react';
import './About.css';

const SKILLS = [
  { name: 'React', pct: 75 },
  { name: 'Node.js / Express (Basics)', pct: 70 },
  { name: 'Docker (Containerization)', pct: 75 },
  { name: 'CI/CD / GitHub Actions', pct: 85 },
  { name: 'AWS / Cloud', pct: 70 },
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
          I'm a <strong>Cloud & DevOps Intern</strong> passionate about building
             reliable and maintainable systems. My work focuses on the
             intersection of <span className="highlight">development and operations</span>.
        </p>

        <p>
         I have hands-on experience containerizing applications with 
         <strong> Docker</strong>, setting up automated CI workflows with 
         <strong> GitHub Actions</strong>, and deploying modern web applications 
         to cloud platforms. I aim to follow best practices to ensure clean, 
         scalable, and maintainable deployments.
        </p>

        <p>
         When I'm not building projects, I'm learning new DevOps tools 
         and strengthening my foundation in 
         <span className="highlight">Cloud and Infrastructure fundamentals</span>.
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