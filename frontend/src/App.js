import React from "react";
import GitHub from "./components/GitHub";
import Architecture from "./components/Architecture";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
:import "./App.css";

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