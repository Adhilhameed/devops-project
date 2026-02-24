import React from "react";
import GitHub from "./components/GitHub";
import Architecture from "./components/Architecture";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./App.css";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Architecture />
      <Contact />
      <GitHub />
    </>
  );
}
  

export default App;