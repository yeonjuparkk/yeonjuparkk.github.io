import "./About.css";
import { instaStory1, instaStory2, instaStory3, instaStory4 } from "../assets";
import { useState, useEffect } from "react";
import { motion as m } from "framer-motion";

const About = () => {
  const images = [instaStory1, instaStory2, instaStory3, instaStory4];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="portfolio__about section__margin section__padding"
      id="about"
    >
      <div className="portfolio__about-heading">
        <h1 className="gradient__text">About</h1>
      </div>
      <div className="portfolio__about-content">
        <m.img
          src={images[index]}
          initial={{ opacity: 0 }}
          transition={{ duration: 4 }}
          animate={{ opacity: 1 }}
        />
      </div>
    </div>
  );
};

export default About;
