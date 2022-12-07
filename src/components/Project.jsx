import "./Project.css";
const Project = ({ imgUrl, title, text, deployLink, gitHubLink }) => {
  return (
    <div className="portfolio__projects-container__project">
      <div className="portfolio__projects-container__project-image">
        {imgUrl ? <img src={imgUrl} alt="project-preview" /> : null}
      </div>
      <div className="portfolio__projects-container__project-title">
        <a href={deployLink}>
          <h1>{title}</h1>
        </a>
      </div>
      <div className="portfolio__projects-container__project-link">
        {gitHubLink ? (
          <a href={gitHubLink}>
            <h2>GitHub</h2>
          </a>
        ) : null}
      </div>
      <div className="portfolio__projects-container__project-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Project;
