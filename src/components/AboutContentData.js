import React from "react";
import "./AboutContentStyles.css";

const Timeline = () => {
  return (
    <section class="design-section">
      <div class="timeline">
        <div class="timeline-empty"></div>
        <div class="timeline-middle">
          <div class="timeline-circle"></div>
        </div>
        <div class="timeline-component timeline-content">
          <h3>
            McGill University School of Continuing Studies - Professional
            Development Certificate in Full Stack JavaScript Development
          </h3>
          <h5>2023 - 2023</h5>
          <p>
            The Professional Development Certificate in Full Stack JavaScript
            Development is a non-credit program designed to equip participants
            with the knowledge and skills required to create modern interactive
            website and applications for a variety of needs and objectives.
            Designed to offer a cutting-edge approach to learning and mastering
            the critical skills required to excel in a career as a Full Stack
            Web Developer, the program covers both client and server side
            JavaScript frameworks required to develop complete web applications
            with focus placed on JavaScript, HMTL5, CSS3, ReactJS, Node.js,
            ExpressJS and SQL.
          </p>
        </div>
        <div class="timeline-component timeline-content">
          <h3>
            Université de Montréal - Baccalaureate cumulatively in management
            and security of information systems
          </h3>
          <h5>2021 - Current</h5>
          <p>
            This program offers short computer training to people who wish to
            learn, improve, modernize or expand their computer knowledge. The
            structure of the program, which allows great flexibility in the
            choice of courses, allows the student to acquire or deepen knowledge
            in several computer science specialties.
          </p>
        </div>
        <div class="timeline-middle">
          <div class="timeline-circle"></div>
        </div>
        <div class="timeline-empty"></div>
        <div class="timeline-empty"></div>
        <div class="timeline-middle">
          <div class="timeline-circle"></div>
        </div>
        <div class="timeline-component timeline-content">
          <h3>Cégep Lionel-Groulx - Diploma of College Studies (DCS)</h3>
          <h5>2018 - 2021</h5>
          <p>
            This profile aims to understand societies and their transformations.
            The specific courses offered there thus make it possible to
            understand and act on major contemporary issues, such as climate
            change, social inequalities, struggles for rights or issues related
            to the media and democracy. Students will be led to look at Quebec,
            Canada and other regions of the world in order to highlight the
            individual and collective forces that make societies evolve
            culturally, socio-economically and politically.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
