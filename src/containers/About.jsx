import "./About.css";
import { instaStory1, instaStory2, instaStory3, instaStory4 } from "../assets";
import { Slide } from "react-slideshow-image";

const About = () => {
  const images = [`${instaStory1}`, `${instaStory2}`, `${instaStory3}`, `${instaStory4}`];

  return (
    <div
      className="portfolio__about section__margin section__padding"
      id="about"
    >
      <div className="portfolio__about-heading">
        <h1 className="gradient__text">About</h1>
      </div>
      <div>
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
        </Slide>
      </div>
    </div>
  );
};

export default About;
