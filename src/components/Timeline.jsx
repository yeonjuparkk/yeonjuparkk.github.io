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
      {timelineType === "professional" && (
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
                Developed reusable backend services using Java Spring Boot,
                contributing to Cargill's widely used enterprise APIs and
                products for customer communication, including Email, SMS, and
                Notifications API
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
      {timelineType === "education" && (
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
      {timelineType === "partTime" && (
        <div className="portfolio__experience-timeline">
          <div className="portfolio__experience-timeline-container left">
            <div className="portfolio__experience-timeline-content">
              <p className="portfolio__experience-timeline-content date">
                Jan 2021 - Present
              </p>
              <p className="portfolio__experience-timeline-content date">
                Austin, TX
              </p>
              <p className="portfolio__experience-timeline-content job">
                Portrait Photographer 📷
              </p>
              <p className="portfolio__experience-timeline-content description">
                Photographed and provided fully edited galleries for engagement,
                wedding, and senior sessions
              </p>
            </div>
          </div>
          <div className="portfolio__experience-timeline-container right">
            <div className="portfolio__experience-timeline-content">
              <p className="portfolio__experience-timeline-content date">
                Aug 2019 - Dec 2019
              </p>
              <p className="portfolio__experience-timeline-content date">
                College Station, TX
              </p>
              <p className="portfolio__experience-timeline-content job">
                Videographer at Texas A&M Rec Sports 📷
              </p>
              <p className="portfolio__experience-timeline-content description">
                Created and edited marketing content (videos and photos)
                promoting department programs used across social platforms
              </p>
            </div>
          </div>
          <div className="portfolio__experience-timeline-container left">
            <div className="portfolio__experience-timeline-content">
              <p className="portfolio__experience-timeline-content date">
                Jan 2017 - Dec 2018
              </p>
              <p className="portfolio__experience-timeline-content date">
                College Station, TX
              </p>
              <p className="portfolio__experience-timeline-content job">
                Undergraduate Teaching Fellow at Texas A&M Department of
                Mathematics ✏️
              </p>
              <p className="portfolio__experience-timeline-content description">
                Facilitated and led weekly engineering math recitation sessions
                for Pre-Calulus, Calculus I, and Calculus II
              </p>
            </div>
          </div>
          <div className="portfolio__experience-timeline-container right">
            <div className="portfolio__experience-timeline-content">
              <p className="portfolio__experience-timeline-content date">
                Jan 2018 - May 2018
              </p>
              <p className="portfolio__experience-timeline-content date">
                College Station, TX
              </p>
              <p className="portfolio__experience-timeline-content job">
                Undergraduate Research Assistant at Texas A&M Department of
                Computer Science 👩🏻‍💻
              </p>
              <p className="portfolio__experience-timeline-content description">
                Provided UI components for a children's social networking
                website under Dr. Hammond
              </p>
            </div>
          </div>
          <div className="portfolio__experience-timeline-container left">
            <div className="portfolio__experience-timeline-content">
              <p className="portfolio__experience-timeline-content date">
                Oct 2016 - Feb 2018
              </p>
              <p className="portfolio__experience-timeline-content date">
                College Station, TX
              </p>
              <p className="portfolio__experience-timeline-content job">
                Peer Tutor for Texas A&M Department of Engineering and Academic
                Success Center ✏️
              </p>
              <p className="portfolio__experience-timeline-content description">
                Tutored 100-200 level engineering, math, and science courses
              </p>
            </div>
          </div>
          <div className="portfolio__experience-timeline-container right">
            <div className="portfolio__experience-timeline-content">
              <p className="portfolio__experience-timeline-content date">
                May 2017 - Aug 2017
              </p>
              <p className="portfolio__experience-timeline-content date">
                College Station, TX
              </p>
              <p className="portfolio__experience-timeline-content job">
                Hostess at 40 Tempura Sushi Restaurant 🍣
              </p>
              <p className="portfolio__experience-timeline-content description">
                Seated guests and managed reservations
              </p>
            </div>
          </div>
          <div className="portfolio__experience-timeline-container left">
            <div className="portfolio__experience-timeline-content">
              <p className="portfolio__experience-timeline-content date">
                Dec 2014 - Aug 2016
              </p>
              <p className="portfolio__experience-timeline-content date">
                Plano, TX
              </p>
              <p className="portfolio__experience-timeline-content job">
                Cashier/Barista at Annie's Cafe ☕
              </p>
              <p className="portfolio__experience-timeline-content description">
                Made drinks and took customer orders
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timeline;
