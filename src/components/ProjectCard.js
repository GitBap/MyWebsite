import { NavLink } from "react-router-dom";
import "./ProjectCardStyles.css";
import React from "react";
import pro1 from "../images/person-at-computer.jpeg.webp";

export const ProjectCard = () => {
  return (
    <div class="work-container">
      <h1 class="project-heading">Projects</h1>
      <div class="project-container2">
        <div class="project-card">
          <img src={pro1} alt="image" />
          <h2 class="project-title">title</h2>
          <div class="description">
            <p>the descriptions</p>
            <button class="ProjectButtons">
              <NavLink to="url.com" class="button">
                View
              </NavLink>
            </button>
            <button class="ProjectButtons">
              <NavLink to="source.com" class="button">
                GitHub
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
