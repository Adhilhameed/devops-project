function Projects() {
  return (
    <section className="section">
      <p className="command">adhil@devops:~$ ls projects</p>

      <div className="card">
        <h3>DevOps Portfolio</h3>
        <p>Dockerized MERN app with GitHub Actions CI/CD deployed on Vercel</p>

        <a href="https://github.com/Adhilhameed/devops-project.git" target="_blank" rel="noreferrer">
          <button>GitHub Repo</button>
        </a>

        <a href="https://devops-project-ybm5.vercel.app/" target="_blank" rel="noreferrer">
          <button>Live Demo</button>
        </a>
      </div>
    </section>
  );
}

export default Projects;