import React, { useEffect, useState } from "react";
import { fetchUsers, fetchProjects } from "../api";

function Portfolio() {
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
    fetchProjects().then(setProjects);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>My Portfolio</h1>

      <section>
        <h2>Users</h2>
        <ul>
          {users.map((user, idx) => (
            <li key={idx}>{user.name}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          {projects.map((project, idx) => (
            <li key={idx}>
              <strong>{project.title}</strong>: {project.description} <br />
              <em>Tech Stack: {project.techStack?.join(", ")}</em> <br />
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Live/Repo Link
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Portfolio;