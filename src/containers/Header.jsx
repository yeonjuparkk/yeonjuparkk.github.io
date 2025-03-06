import "./header.css";
import { profilePhoto } from "../assets";

const Header = () => {
  return (
    <>
      <div className="portfolio__header section__padding" id="home">
        <div className="portfolio__header-content">
          <h1>Software Engineer</h1>
          <h1>Marathoner</h1>
          <h1>Dog Mom</h1>
          <p>
            Hello! <br />
            My name is Yeonju, and welcome to my page! <br /> I'm a full-time fullstack
            software engineer and made this portfolio to share some of the
            coding projects I have been working on. <br /> Have fun exploring my
            page!
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
