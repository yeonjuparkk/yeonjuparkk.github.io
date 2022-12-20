import "./Timeline.css";
import { useState } from "react";
import {
  workDark,
  workLight,
  educationLight,
  educationDark,
  mugDark,
  mugLight,
} from "../assets";

const Timeline = () => {
  const [timelineType, setTimelineType] = useState("professional");

  return (
    <div className="portfolio__work-experience-container">
      <div className="portfolio__experience-heading">
        <h2>Experience</h2>
      </div>
      <div className="portfolio__experience-button">
        <div
          className="portfolio__experience-button-content"
          onClick={() => {
            setTimelineType("professional");
          }}
        >
          <img
            src={timelineType === "professional" ? workLight : workDark}
            alt="suitcase-icon"
          />
          <div
            className={`portfolio__experience-heading ${
              timelineType === "professional" ? "active" : "inactive"
            }`}
          >
            <h3>Work</h3>
          </div>
        </div>
        <div
          className="portfolio__experience-button-content"
          onClick={() => {
            setTimelineType("education");
          }}
        >
          <img
            src={timelineType === "education" ? educationLight : educationDark}
            alt="graduation-cap-icon"
          />
          <div
            className={`portfolio__experience-heading ${
              timelineType === "education" ? "active" : "inactive"
            }`}
          >
            <h3>Education</h3>
          </div>
        </div>
        <div
          className="portfolio__experience-button-content"
          onClick={() => {
            setTimelineType("partTime");
          }}
        >
          <img
            src={timelineType === "partTime" ? mugLight : mugDark}
            alt="mug-icon"
          />
          <div
            className={`portfolio__experience-heading ${
              timelineType === "partTime" ? "active" : "inactive"
            }`}
          >
            <h3>Part-Time</h3>
          </div>
        </div>
      </div>
      {timelineType==="professional" && (
        <div className="portfolio__experience-timeline">
          <div className="portfolio__experience-timeline-container left">
            <div className="portfolio__experience-timeline-content">
              <p className="portfolio__experience-timeline-content date">
                May 2022 - Present
              </p>
              <p className="portfolio__experience-timeline-content date">
                Remote
              </p>
              <p className="portfolio__experience-timeline-content job">
                Software Engineer at Cargill 👩🏻‍💻
              </p>
              <p className="portfolio__experience-timeline-content description">
                Developed reusable microservices for APIs and products used
                across the enterprise
              </p>
            </div>
          </div>
          <div className="portfolio__experience-timeline-container right">
            <div className="portfolio__experience-timeline-content">
              <p className="portfolio__experience-timeline-content date">
                Jan 2020 - May 2022
              </p>
              <p className="portfolio__experience-timeline-content date">
                Fullerton, CA
              </p>
              <p className="portfolio__experience-timeline-content job">
                Process Engineer at Cargill 👷🏻‍♀️
              </p>
              <p className="portfolio__experience-timeline-content description">
                Directly oversaw the end to end processing and disbursement for
                a cooking oil refinery
              </p>
            </div>
          </div>
          <div className="portfolio__experience-timeline-container left">
            <div className="portfolio__experience-timeline-content">
              <p className="portfolio__experience-timeline-content date">
                Jan 2019 - Aug 2019
              </p>
              <p className="portfolio__experience-timeline-content date">
                Chigago, IL
              </p>
              <p className="portfolio__experience-timeline-content job">
                Production Management Engineer Co-op at Cargill 👷🏻‍♀️
              </p>
              <p className="portfolio__experience-timeline-content description">
                Managed capital projects directly related to safety improvement
                in a PSM regulated facility
              </p>
            </div>
          </div>
          <div className="portfolio__experience-timeline-container right">
            <div className="portfolio__experience-timeline-content">
              <p className="portfolio__experience-timeline-content date">
                May 2018 - Aug 2018
              </p>
              <p className="portfolio__experience-timeline-content date">
                St. Paul Park, MN
              </p>
              <p className="portfolio__experience-timeline-content job">
                Process Engineer Intern at Marathon Petroleum 👷🏻‍♀️
              </p>
              <p className="portfolio__experience-timeline-content description">
                Supported process engineering team at 102,000 BPD refinery
              </p>
            </div>
          </div>
        </div>
      )}
      {timelineType==="education" && (
        <div className="portfolio__experience-timeline">
          <div className="portfolio__experience-timeline-container left">
            <div className="portfolio__experience-timeline-content">
              <p className="portfolio__experience-timeline-content date">
                Oct 2021 - Apr 2021
              </p>
              <p className="portfolio__experience-timeline-content date">
                Remote
              </p>
              <p className="portfolio__experience-timeline-content job">
                Fullstack Academy
              </p>
              <p className="portfolio__experience-timeline-content description">
                Part-Time Software Engineering Immersive Bootcamp
              </p>
            </div>
          </div>
          <div className="portfolio__experience-timeline-container right">
            <div className="portfolio__experience-timeline-content">
              <p className="portfolio__experience-timeline-content date">
                Aug 2015 - Dec 2019
              </p>
              <p className="portfolio__experience-timeline-content date">
                College Station, TX
              </p>
              <p className="portfolio__experience-timeline-content job">
                Texas A&M University
              </p>
              <p className="portfolio__experience-timeline-content description">
                Bachelor of Science in Chemical Engineering
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timeline;
