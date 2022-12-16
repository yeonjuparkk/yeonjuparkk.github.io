import "./Library.css";
import { CTA } from "../components";
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
      <CTA />
    </div>
  );
};

export default Library;
