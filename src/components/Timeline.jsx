import "./Timeline.css";
import { useState } from "react";
import { workDark, workLight, educationLight, educationDark } from "../assets";

const Timeline = () => {
  const [showEducation, setShowEducation] = useState(false);

  const toggleTimeline = (e) => {
    setShowEducation(!showEducation);
  };

  return (
    <>
      <div className="portfolio__experience-heading">
        <h2>Timeline</h2>
      </div>
      <div className="portfolio__experience-button" onClick={toggleTimeline}>
        {showEducation ? (
          <>
            <div className="portfolio__experience-button-content">
              <img src={workDark} alt="dark-suitcase-icon" />
              <div className="portfolio__experience-heading inactive">
                <h2>Work</h2>
              </div>
            </div>
            <div className="portfolio__experience-button-content">
              <img src={educationLight} alt="light-graduation-cap-icon" />
              <div className="portfolio__experience-heading active">
                <h2>Education</h2>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="portfolio__experience-button-content">
              <img src={workLight} alt="light-suitcase-icon" />
              <div className="portfolio__experience-heading active">
                <h2>Work</h2>
              </div>
            </div>
            <div className="portfolio__experience-button-content">
              <img src={educationDark} alt="dark-graduation-cap-icon" />
              <div className="portfolio__experience-heading inactive">
                <h2>Education</h2>
              </div>
            </div>
          </>
        )}
      </div>
      {!showEducation && (
        <div class="portfolio__experience-timeline">
          <div class="portfolio__experience-timeline container left">
            <div class="portfolio__experience-timeline content">
              <h2>May 2022 - Present</h2>
              <p>Software Engineer at Cargill</p>
              <p>
                Developed reusable microservices for APIs and products used
                across the enterprise
              </p>
            </div>
          </div>
          <div class="portfolio__experience-timeline container right">
            <div class="portfolio__experience-timeline content">
              <h2>Sep 2020 - May 2022</h2>
              <p>Process Engineer at Cargill</p>
              <p>
                Directly oversaw the refinery production with a team of 11
                operators
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Timeline;
