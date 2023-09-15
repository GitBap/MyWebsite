import React from "react";
import NavBar from "../components/NavBar";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const Projects = () => {
  return (
    <div>
      <NavBar />
      <Hero heading="PROJECTS" text="My recent projects" />
      <Footer />
    </div>
  );
};

export default Projects;
