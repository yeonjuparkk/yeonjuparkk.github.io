import "./article.css";

const Article = ({ imgUrl}) => {
  return (
    <div className="portfolio__library-container_article">
      <div className="portfolio__library-container_article-image">
        <img src={imgUrl} alt="library" />
      </div>
    </div>
  );
};

export default Article;
