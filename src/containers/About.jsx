import "./About.css";
import { instaStory1, instaStory2, instaStory3, instaStory4 } from "../assets";
import { useState, useEffect } from "react";
import { motion as m } from "framer-motion";

const About = () => {
  const images = [instaStory3, instaStory2, instaStory1, instaStory4];
  const [index, setIndex] = useState(0);
  console.log("index" + index);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % images.length);
      return () => clearInterval(interval);
    }, 4000);
  }, []);

  return (
    <div
      className="portfolio__about section__margin section__padding"
      id="about"
    >
      <div className="portfolio__about-heading">
        <h1 className="gradient__text">About Me</h1>
      </div>
      <div className="portfolio__about-content">
        <div className="portfoli__about-stories">
          <m.img
            src={images[index]}
            initial={{ opacity: 0 }}
            transition={{ duration: 2 }}
            animate={{ opacity: 1 }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
