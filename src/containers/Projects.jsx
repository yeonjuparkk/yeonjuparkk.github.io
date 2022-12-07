import "./Projects.css";
import { Article } from "../components";
import { plantarrium } from "../assets";

const Projects = () => {
  const projectsData = [
    {
      title: "Book Treats",
      gitHubLink: "",
      imgUrl: `${plantarrium}`,
      deployLink: "https://herewecode.io/",
      text: "A fun website to track reading records by stacking books",
    },
    {
      title: "Plantarrium",
      gitHubLink: "https://github.com/yeonjuparkk/infinite-loop",
      deployLink: "https://plantarrium.onrender.com",
      text: "An E-Commerse website for selling plants",
    },
    {
      title: "Fitness Trac.kr",
      gitHubLink: "",
      deployLink: "https://herewecode.io/",
      text: "Learned useEffect cause instructor was ignoring me",
    },
    {
      title: "Stranger's Things",
      gitHubLink: "",
      deployLink: "https://herewecode.io/",
      text: "Sold my Black Air Force 1s",
    },
    {
      title: "Snake Game",
      gitHubLink: "https://github.com/yeonjuparkk/snake-game",
      deployLink: "https://vibrant-beaver-bfeed7.netlify.app/",
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
            <Article
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