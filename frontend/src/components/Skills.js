import React from "react";
import { motion } from "framer-motion";

const skills = [
  "Docker",
  "GitHub Actions",
  "CI/CD Pipelines",
  "AWS",
  "MongoDB",
  "Vercel",
  "Linux",
  "Git"
];

function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Technical Skills</h2>

      <div className="card">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            className="skill-badge"
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}

export default Skills;