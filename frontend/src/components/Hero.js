import React from "react";

function Hero() {
  return (
    <section className="section">
      <p className="command">adhil@devops:~$ whoami</p>
      <p className="output">Adhil Hameed</p>

      <p className="command">adhil@devops:~$ role</p>
      <p className="output">DevOps | Docker | CI/CD | AWS Engineer</p>
      <a href="/resume.pdf" download><button>Download Resume</button>
</a>
    </section>
  );
}

export default Hero;