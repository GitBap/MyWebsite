import { NavLink } from "react-router-dom";
import "./ProjectCardStyles.css";
import React from "react";

export const ProjectCard = (props) => {
  return (
    <div class="project-card">
      <img src={props.imgsrc} alt="image" />
      <h2 class="project-title">{props.title}</h2>
      <div class="description">
        <p>{props.text}</p>
        <button class="ProjectButtons">
          <NavLink to={props.view} class="button">
            View
          </NavLink>
        </button>
        <button class="ProjectButtons">
          <NavLink to={props.source} class="button">
            GitHub
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
