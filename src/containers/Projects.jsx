import "./Projects.css";
import { Project } from "../components";
import { plantarrium, snake } from "../assets";

const Projects = () => {
  const projectsData = [
    {
      title: "Book Treats",
      gitHubLink: "",
      deployLink: "https://herewecode.io/",
      imgUrl: "",
      text: "A fun website to track reading records by stacking books",
    },
    {
      title: "Plantarrium",
      gitHubLink: "https://github.com/yeonjuparkk/infinite-loop",
      deployLink: "https://plantarrium.onrender.com",
      imgUrl: `${plantarrium}`,
      text: "An E-Commerse website for selling plants",
    },
    {
      title: "Stranger's Things",
      gitHubLink: "",
      deployLink: "https://herewecode.io/",
      imgUrl: "",
      text: "strangers things",
    },
    {
      title: "Snake Game",
      gitHubLink: "https://github.com/yeonjuparkk/snake-game",
      deployLink: "https://vibrant-beaver-bfeed7.netlify.app/",
      imgUrl: `${snake}`,
      text: "Snake Game",
    },
  ];

  return (
    <div
      className="portfolio__projects section__margin section__padding"
      id="projects"
    >
      <div className="portfolio__projects-heading">
        <h1 className="gradient__text">Projects</h1>
      </div>
      <div className="portfolio__projects-container">
        {projectsData.map(
          ({ title, gitHubLink, deployLink, imgUrl, text }, i) => (
            <Project
              key={i}
              title={title}
              gitHubLink={gitHubLink}
              deployLink={deployLink}
              imgUrl={imgUrl}
              text={text}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
