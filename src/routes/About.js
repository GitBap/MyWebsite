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
        text="I've always been interested by technology since it's a big part of our generation now. I learned about computer science in 2021 which is why, 
        after college I decided to pursue a career in cybersecurity or web development. Both fields are really interesting for me, which is why I'm currently 
        studying both. I want to acquire experience and knowledge in computer development, language programming and anything else regarding technology. 
        Knowing that I have to stay up to date to remain in this field, it encourages me to start and pursue my career in web development or cybersecurity."
      />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
