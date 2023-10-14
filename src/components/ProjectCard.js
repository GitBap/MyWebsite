import { NavLink } from "react-router-dom";
import "./ProjectCardStyles.css";
import React from "react";

export const ProjectCard = (props) => {
  return (
    <div class="project-card">
      <img src={props.imgsrc} />
      <h2 class="project-title">{props.title}</h2>
      <div class="description">
        <p>{props.text}</p>
        <div class="ProjectButtons">
          <NavLink to={props.view} className="pbutton">
            View
          </NavLink>
        </div>
        <div class="ProjectButtons">
          <NavLink to={props.source} className="pbutton">
            GitHub
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
