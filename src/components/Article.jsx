import "./article.css";

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className="portfolio__library-container_article">
      <div className="portfolio__library-container_article-image">
        <img src={imgUrl} alt="library" />
      </div>
      <div className="portfolio__library-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Article;
