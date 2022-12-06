import { Social } from "../components";
import { song } from "../assets";
import "./footer.css";

const Footer = () => {
  return (
    <div className="portfolio__footer section__padding">
      <div className="portfolio__footer-links">
        <div className="portfolio__footer-links_logo">
          <h1>Yeonju Park</h1>
          <p>All Rights Reserved</p>
        </div> 
        <div className="portfolio__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Stuuff</p>
          <p>More Stuff</p>
          <p>Yeah Stuff</p>
        </div>
        <div className="portfolio__footer-links_div">
          <h4>Company</h4>
          <p>Overons</p>
          <p>Stuuff</p>
          <p>More Stuff</p>
          <p>Yeah Stuff</p>
        </div>
        <div className="portfolio__footer-links_div">
          <h4>Get In Touch</h4>
          <p>Overons</p>
          <p>Stuuff</p>
          <p>More Stuff</p>
          <p>Yeah Stuff</p>
        </div>
      </div>

      <div className="portfolio__footer-copyright">
        <p>© 2022 Yeonju Park. All rights reserved.</p>
      </div>
      <Social />
      <div className="mp3-modal">
        <audio controls autoPlay={true}>
          <source src={song} type="audio/mpeg"/>
        </audio>
      </div>
    </div>
  );
}

export default Footer;
