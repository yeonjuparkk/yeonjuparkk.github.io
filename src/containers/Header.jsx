import "./header.css";
import { profilePhoto } from "../assets";

const Header = () => {
  return (
    <>
      <div className="portfolio__header section__padding" id="home">
        <div className="portfolio__header-content">
          <h1>Software Engineer</h1>
          <h1>Photographer</h1>
          <h1>Shopaholic</h1>
          <h1>Dog Mom</h1>
          <p>
            Hello! <br />
            My name is Yeonju, and welcome to my page! <br /> I'm a full-time
            software engineer and made this portfolio to share some of the
            projects I have been working on. <br /> You can see some of my
            photography and art projects here as well. <br /> Have fun exploring
            my page!
          </p>
        </div>
        <div className="portfolio__header-image">
          <img src={profilePhoto} alt="pfp" />
        </div>
      </div>
      <div className="portfolio__header-transition" />
    </>
  );
};

export default Header;
