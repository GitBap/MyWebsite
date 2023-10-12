import "./FormStyles.css";

import React from "react";

const Form = () => {
  return (
    <div class="form">
      <form>
        <label>Your name</label>
        <input type="text" required></input>
        <label>Email</label>
        <input type="email" required></input>
        <label>Subject</label>
        <input type="text" required></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Type your message" required />
        <button class="button">Submit</button>
      </form>
    </div>
  );
};

export default Form;
