import React from "react";

function Architecture() {
  return (
    <section className="section">
      <p className="command">adhil@devops:~$ docker-architecture</p>

      <pre className="output">
{`
      +------------------+
      |    GitHub Repo   |
      +--------+---------+
               |
               v
      +------------------+
      | GitHub Actions   |
      |   CI/CD Pipeline |
      +--------+---------+
               |
               v
      +------------------+
      |  Docker Container|
      +--------+---------+
               |
               v
      +------------------+
      |     Vercel       |
      |  Production App  |
      +------------------+
`}
      </pre>
    </section>
  );
}

export default Architecture;