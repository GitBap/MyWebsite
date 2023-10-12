import "./FooterStyles.css";
import handelolivierresume from "../assets/handelolivierresume.pdf";
import handelolivierresume2 from "../assets/handelolivierresumeFR.pdf";

import React from "react";

import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div class="footer">
      <div class="footer-container">
        <div class="footerContainerOne">
          <div class="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Montreal, Canada</p>
            </div>
          </div>
          <div class="footerPhone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />{" "}
              438-923-7308
            </h4>
          </div>
          <div class="footerMail">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "fff", marginRight: "2rem" }}
              />{" "}
              baptistecoding@gmail.com
            </h4>
          </div>
        </div>

        <div class="footerContainerTwo">
          <a href={handelolivierresume} download="handelolivierresume.pdf">
            <button class="ftbtn1"> Download CV </button>
          </a>

          <a href={handelolivierresume2} download="handelolivierresumeFR.pdf">
            <button class="ftbtn2">Télecharger CV</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
