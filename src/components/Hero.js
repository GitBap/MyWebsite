import "./HeroStyles.css";

import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <div class="Hero-img">
        <div class="Heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Hero;
