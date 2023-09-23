import "./AboutContentStyles.css";
import React from "react";

const AboutContent = () => {
  return (
    <div class="qualification section">
      <h2 class="title">Qualification</h2>
      <div class="subtitle">My personal journey</div>

      <div class="qualificationContainer container">
        <div class="qualificationTabs">
          <div class="qualificationButton qualificatioActive button--flex">
            <i class="qualificationIcon"></i> Education
          </div>

          <div class="qualificationButton button--flex">
            <i class="qualificationIcon"></i> Experience
          </div>
        </div>

        <div class="qualificationSection">
          <div class="qualificationContent">
            <div class="qualificationData">
              <div>
                <h3 class="qualificationTitle">Web dev</h3>
                <div class="qualificationSubtitle">momo -Institute</div>
                <div class="qualificationCalender">
                  <i class="calendarAlt"></i> 2021 - present
                </div>
              </div>

              <div>
                <span class="qualificationRounder"></span>
                <span class="qualificationLine"></span>
              </div>
            </div>

            <div class="qualificationData">
              <div></div>

              <div>
                <span class="qualificationRouder"></span>
                <span class="qualificationLine"></span>
              </div>
              <div>
                <h3 class="qualificationTitle">Web</h3>
                <div class="qualificationSubtitle">usa -Institute</div>
                <div class="qualificationCalender">
                  <i class="calendarAlt"></i> 2023 - present
                </div>
              </div>
            </div>

            <div class="qualificationData">
              <div>
                <h3 class="qualificationTitle">Webbb</h3>
                <div class="qualificationSubtitle">canada -Institute</div>
                <div class="qualificationCalender">
                  <i class="calendarAlt"></i> 2024 - present
                </div>
              </div>

              <div>
                <span class="qualificationRounder"></span>
                <span class="qualificationLine"></span>
              </div>
            </div>

            <div class="qualificationData">
              <div></div>

              <div>
                <span class="qualificationRouder"></span>
                <span class="qualificationLine"></span>
              </div>
              <div>
                <h3 class="qualificationTitle">Web</h3>
                <div class="qualificationSubtitle">Spain -Institute</div>
                <div class="qualificationCalender">
                  <i class="calendarAlt"></i> 2021 - present
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
