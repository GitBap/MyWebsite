import React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div>
      <NavBar />
      <Hero
        heading="ABOUT ME"
        text="I learned about computer science in 2021 which is why, 
        after college I decided to pursue a career in this field. I want to acquire experience and knowledge in computer development, language programming and anything else regarding technology. 
        Knowing that I have to stay up to date to remain in this field, it encourages me to start and pursue my career in web development or cybersecurity."
      />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
