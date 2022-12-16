import "./Library.css";
import { Article, CTA } from "../components";
import {
  wedding1,
  wedding2,
  wedding3,
  wedding4,
  wedding5,
  weddingDetail1,
  weddingDetail2,
  weddingDetail3,
} from "../assets";

const Library = () => {
  return (
    <div className="portfolio__library section__padding" id="photography">
      <div className="portfolio__library-heading">
        <h1 style={{ color: "white" }}>Photography</h1>
      </div>
      <div className="portfolio__library-container">
        <div className="portfolio__library-container_groupA">
          <Article imgUrl={wedding1} />
        </div>
        <div className="portfolio__library-container_groupB">
          <Article imgUrl={wedding2} />
        </div>
        <div className="portfolio__library-container_groupA">
          <Article imgUrl={wedding3} />
        </div>
        <div className="portfolio__library-container_groupA">
          <Article imgUrl={wedding4} />
        </div>
        <div className="portfolio__library-container_groupA">
          <Article imgUrl={weddingDetail1} />
        </div>
        <div className="portfolio__library-container_groupA">
          <Article imgUrl={wedding5} />
        </div>
      </div>
      <CTA />
    </div>
  );
};

export default Library;
