import "./Library.css";
import { Article } from "../components";
import {
  wedding1,
  wedding2
} from "../assets";

const Library = () => {
  return (
    <div className="portfolio__library section__padding" id="library">
      <div className="portfolio__library-heading">
        <h1 style={{ color: "white" }}>Photography Portfolio</h1>
      </div>
      <div className="portfolio__library-container">
        <div className="portfolio__library-container_groupA">
          <Article
            imgUrl={wedding1}
          />
        </div>
        <div className="portfolio__library-container_groupB">
          <Article
            imgUrl={wedding2}
          />
        </div>
      </div>
    </div>
  );
};

export default Library;
