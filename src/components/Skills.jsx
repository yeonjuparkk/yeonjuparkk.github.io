import "./Skills.css";
import { useState } from "react";
import {
  css,
  html,
  node,
  postgreSQL,
  react,
  java,
  frontendDark,
  frontendLight,
  otherDark,
  otherLight,
  backendDark,
  backendLight,
  javaScript,
} from "../assets";
const Skills = () => {
  const [skillType, setSkillType] = useState("frontend");

  return (
    <div className="portfolio__skills-container">
      <div className="portfolio__experience-heading">
        <h2>Skills</h2>
      </div>
      <div className="portfolio__experience-button">
        <div
          className="portfolio__experience-button-content"
          onClick={() => {
            setSkillType("frontend");
          }}
        >
          <img
            src={skillType === "frontend" ? frontendLight : frontendDark}
            alt="top-layer-icon"
          />
          <div
            className={`portfolio__experience-heading ${
              skillType === "frontend" ? "active" : "inactive"
            }`}
          >
            <h3>Frontend</h3>
          </div>
        </div>
        <div
          className="portfolio__experience-button-content"
          onClick={() => {
            setSkillType("backend");
          }}
        >
          <img
            src={skillType === "backend" ? backendLight : backendDark}
            alt="bottom-layer-icon"
          />
          <div
            className={`portfolio__experience-heading ${
              skillType === "backend" ? "active" : "inactive"
            }`}
          >
            <h3>Backend</h3>
          </div>
        </div>
        <div
          className="portfolio__experience-button-content"
          onClick={() => {
            setSkillType("other");
          }}
        >
          <img
            src={skillType === "other" ? otherLight : otherDark}
            alt="middle-layer-icon"
          />
          <div
            className={`portfolio__experience-heading ${
              skillType === "other" ? "active" : "inactive"
            }`}
          >
            <h3>Tools/Others</h3>
          </div>
        </div>
      </div>
      {skillType === "frontend" && (
        <div className="portfolio__experience-skills-container">
          <div className="portfolio__experience-skills-content">
            <img src={javaScript} alt="JavaScript-logo" />
            <p className="portfolio__experience-skills name">JavaScript</p>
          </div>
          <div className="portfolio__experience-skills-content">
            <img src={react} alt="react-logo" />
            <p className="portfolio__experience-skills name">React</p>
          </div>
          <div className="portfolio__experience-skills-content">
            <img src={html} alt="html-logo" />
            <p className="portfolio__experience-skills name">HTML5</p>
          </div>
          <div className="portfolio__experience-skills-content">
            <img src={css} alt="html-logo" />
            <p className="portfolio__experience-skills name">CSS3</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
