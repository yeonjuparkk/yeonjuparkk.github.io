import "./article.css";

const Article = ({ imgUrl, title, text, deployLink, gitHubLink }) => {
  return (
    <div className="portfolio__library-container_article">
      <div className="portfolio__library-container_article-image">
        <img src={imgUrl} alt="library" />
      </div>
      <div className="portfolio__library-container_article-content">
        <div>
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
        </div>
      </div>
    </div>
  );
};

export default Article;
