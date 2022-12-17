import "./Library.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
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

const images = [
  `${wedding1}`,
  `${weddingDetail1}`,
  `${weddingDetail2}`,
  `${wedding3}`,
  `${wedding2}`,
  `${wedding4}`,
  `${wedding5}`,
];

const Library = () => {
  return (
    <div className="portfolio__library section__padding" id="photography">
      <div className="portfolio__library-heading">
        <h1 style={{ color: "white" }}>Photography</h1>
      </div>
      <Slide>
        <div className="portfolio__library-each-slide-effect">
          <div>
            <img src={`${images[0]}`} alt="photography" />
          </div>
        </div>
        <div className="portfolio__library-each-slide-effect">
          <div>
            <img src={`${images[1]}`} alt="photography" />
          </div>
        </div>
        <div className="portfolio__library-each-slide-effect">
          <div>
            <img src={`${images[2]}`} alt="photography" />
          </div>
        </div>
        <div className="portfolio__library-each-slide-effect">
          <div>
            <img src={`${images[3]}`} alt="photography" />
          </div>
        </div>
        <div className="portfolio__library-each-slide-effect">
          <div>
            <img src={`${images[4]}`} alt="photography" />
          </div>
        </div>
        <div className="portfolio__library-each-slide-effect">
          <div>
            <img src={`${images[5]}`} alt="photography" />
          </div>
        </div>
        <div className="portfolio__library-each-slide-effect">
          <div>
            <img src={`${images[6]}`} alt="photography" />
          </div>
        </div>
      </Slide>
      <CTA />
    </div>
  );
};

export default Library;
