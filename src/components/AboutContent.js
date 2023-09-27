import "./AboutContentStyles.css";
import React from "react";
import Timeline from "./AboutContentData";

const AboutContent = () => {
  return (
    <div className="App">
      <h1 class="AboutTitle">Certification</h1>
      <Timeline />
    </div>
  );
};

export default AboutContent;
