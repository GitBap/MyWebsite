import "./FormStyles.css";

import React from "react";

const Form = () => {
  return (
    <div class="contact-container">
      <a href="tel:+438-923-7308" class="phone">
        Call me
      </a>{" "}
      <br></br>
      <a href="mailto:baptistecoding@gmail.com" class="email">
        Email me
      </a>
    </div>
  );
};

export default Form;
