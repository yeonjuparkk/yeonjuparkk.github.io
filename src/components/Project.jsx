import "./Project.css";
const Project = ({ title, text, deployLink, gitHubLink }) => {
  return (
    <div className="portfolio__projects-container__project">
      <div className="portfolio__projects-container__project-title">
        <div />
        <a href={deployLink}>
          <h1>{title}</h1>
        </a>
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
