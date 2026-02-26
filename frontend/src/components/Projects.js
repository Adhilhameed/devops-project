import './Projects.css';

const PROJECTS = [
  {
    num: '01',
    title: 'DevOps Portfolio Platform',
    desc: 'A React portfolio system with automated CI/CD pipelines, Docker containerization, and GitHub Actions workflows. Features zero-downtime deployments, automated testing, and cloud hosting.',
    tags: ['React', 'Node.js', 'Docker', 'GitHub Actions', 'MongoDB'],
    link: 'https://github.com/adhilhameed',
  },
 
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-header reveal">
        <span className="section-num">02.</span>
        <h2 className="section-title">Projects</h2>
        <div className="section-line" />
      </div>

      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <a
            key={p.num}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="project-card reveal"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="project-top">
              <span className="project-num">{p.num}</span>
              <div className="project-arrow">↗</div>
            </div>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tags">
              {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}