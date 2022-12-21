import "./Experience.css";
import { Skills, Timeline } from "../components";

const Experience = () => {
  return (
    <div className="portfolio__experience section__margin" id="experience">
      <div className="portfolio__experience-heading">
        <h1 className="gradient__text">Experience</h1>
      </div>
      <div className="portfolio__experience-container">
        <div className="portfolio__experience-content">
          <Skills />
        </div>
        <div className="portfolio__experience-content">
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default Experience;
