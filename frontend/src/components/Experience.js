import './Experience.css';

const EXPERIENCE = [
  {
    role: 'DevOps Engineer',
    company: 'Your Company Name',
    period: '2023 — Present',
    desc: 'Architected and maintained CI/CD pipelines using GitHub Actions. Containerized applications with Docker and managed deployments to AWS. Reduced deployment time by 60% through automation.',
    tags: ['Docker', 'GitHub Actions', 'AWS', 'Terraform'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Previous Company',
    period: '2022 — 2023',
    desc: 'Built full-stack web applications using React and Node.js. Designed RESTful APIs, integrated MongoDB databases, and deployed applications to cloud environments.',
    tags: ['React', 'Node.js', 'MongoDB', 'REST APIs'],
  },
];

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="section-header reveal">
        <span className="section-num">04.</span>
        <h2 className="section-title">Experience</h2>
        <div className="section-line" />
      </div>

      <div className="exp-list">
        {EXPERIENCE.map((exp, i) => (
          <div className="exp-item reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className="exp-left">
              <div className="exp-period">{exp.period}</div>
              <div className="exp-dot" />
            </div>
            <div className="exp-right">
              <h3 className="exp-role">{exp.role}</h3>
              <div className="exp-company">{exp.company}</div>
              <p className="exp-desc">{exp.desc}</p>
              <div className="exp-tags">
                {exp.tags.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}