import "./MainStyles.css";
import React from "react";

import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div class="main">
      <div class="mask"></div>
      <div class="content">
        <h1>Olivier Baptiste</h1>
        <p>Hi, I'm a web developper</p>
        <div>
          <Link to="/Projects" class="btn">
            Projects
          </Link>
          <Link to="/Contact" class="btn-transparent">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
