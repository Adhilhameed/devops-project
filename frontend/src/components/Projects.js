import './Projects.css';

const PROJECTS = [
  {
   num: '01',
   title: 'DevOps Portfolio Platform',
   desc: 'A React-based portfolio application containerized with Docker and integrated with GitHub Actions for automated CI workflows. Demonstrates modern DevOps practices including version control, automated builds, and cloud deployment.',
   tags: ['React', 'Docker', 'GitHub Actions', 'CI/CD', 'Vercel'],
   link: 'https://github.com/Adhilhameed/devops-project',
  },
  {
  num: '01',
  title: 'DevOps Monitoring Platform',
  desc: 'Built a full-stack observability platform for 3 Python Flask microservices (Auth, Orders, Inventory). Instrumented services with Prometheus client library, wrote PromQL alert rules using the RED method (Rate, Errors, Duration), visualized metrics in Grafana dashboards, aggregated logs using Loki and Promtail, and configured Alertmanager to send real-time Slack notifications when error rates exceed 10%. Everything deployed with Docker Compose in a single command.',
  tags: ['Python', 'Flask', 'Docker', 'Prometheus', 'Grafana', 'Loki', 'Alertmanager', 'PromQL'],
  link: 'https://github.com/Adhilhameed/devops-monitoring',
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