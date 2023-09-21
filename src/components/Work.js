import React from "react";
import ProjectCard from "./ProjectCard";
import WorkCardData from "./WorkCardData";

export const Work = () => {
  return (
    <div class="work-container">
      <h1 class="project-heading">Projects</h1>
      <div class="project-container2">
        {WorkCardData.map((val, ind) => {
          return (
            <ProjectCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
