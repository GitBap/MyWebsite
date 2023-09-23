import React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <Hero heading="CONTACT ME" text="Send me a message!" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
