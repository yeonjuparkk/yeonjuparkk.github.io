import "./Projects.css";
import { Project } from "../components";
import { plantarrium, snake, strangersThings } from "../assets";

const Projects = () => {
  const projectsData = [
    {
      title: "Book Treats",
      gitHubLink: "",
      deployLink: "https://herewecode.io/",
      imgUrl: `${plantarrium}`,
      text: "A fun website to track reading records by stacking books",
      techStack: "TypeScript, Java"
    },
    {
      title: "Plantarrium",
      gitHubLink: "https://github.com/yeonjuparkk/infinite-loop",
      deployLink: "https://plantarrium.onrender.com",
      imgUrl: `${plantarrium}`,
      text: "An E-Commerse website for selling plants",
      techStack: "React, Node.js, postgreSQL, CSS"
    },
    {
      title: "Stranger's Things",
      gitHubLink: "https://github.com/yeonjuparkk/strangers_things_project",
      deployLink: "https://brave-dijkstra-2c5b38.netlify.app/",
      imgUrl: `${strangersThings}`,
      text: "A Craigslist like website built with CRUD",
      techStack: "React"
    },
    {
      title: "Snake Game",
      gitHubLink: "https://github.com/yeonjuparkk/snake-game",
      deployLink: "https://vibrant-beaver-bfeed7.netlify.app/",
      imgUrl: `${snake}`,
      text: "Score by eating as many apples",
      techStack: "JavaScript DOM"
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
          ({ title, gitHubLink, deployLink, imgUrl, text, techStack }, i) => (
            <Project
              key={i}
              title={title}
              gitHubLink={gitHubLink}
              deployLink={deployLink}
              imgUrl={imgUrl}
              text={text}
              techStack={techStack}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
