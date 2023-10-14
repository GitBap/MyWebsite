import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Work from "../components/Work";

const Projects = () => {
  return (
    <div>
      <NavBar />
      <Hero heading="PROJECTS" text="These are my main recent projects." />
      <Work />
      <div
        style={{
          textAlign: "center",
          paddingTop: "10px",
          paddingBottom: "30px",
        }}
      >
        <h1> For more of projects, please take a look at my github.</h1>
        <a
          href="https://github.com/GitBap"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "block", marginTop: "20px" }}
        >
          Visit My GitHub
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
