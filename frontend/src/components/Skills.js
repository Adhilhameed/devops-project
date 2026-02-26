import './Skills.css';

const STACK = [
  { icon: '⚛️', name: 'React', desc: 'Component-driven UI development' },
  { icon: '🐋', name: 'Docker', desc: 'Container orchestration & deployment' },
  { icon: '⚙️', name: 'GitHub Actions', desc: 'Automated CI/CD workflows' },
  { icon: '☁️', name: 'AWS', desc: 'Cloud infrastructure & services' },
  { icon: '🟢', name: 'Node.js', desc: 'Backend API development' },
  { icon: '🍃', name: 'MongoDB', desc: 'NoSQL database management' },
 
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-header reveal">
        <span className="section-num">03.</span>
        <h2 className="section-title">Tech Stack</h2>
        <div className="section-line" />
      </div>

      <div className="stack-grid">
        {STACK.map((item, i) => (
          <div
            className="stack-card reveal"
            key={item.name}
            style={{ transitionDelay: `${i * 0.07}s` }}
          >
            <span className="stack-icon">{item.icon}</span>
            <div className="stack-name">{item.name}</div>
            <div className="stack-desc">{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}