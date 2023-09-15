import React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const About = () => {
  return (
    <div>
      <NavBar />
      <Hero heading="ABOUT" text="A little bit about me" />
      <Footer />
    </div>
  );
};

export default About;
