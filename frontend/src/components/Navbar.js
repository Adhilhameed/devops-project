import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Adhil</h2>
      <ul>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li><Link to="education" smooth={true} duration={500}>Education</Link></li>
        <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;