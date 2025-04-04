import "./footer.css";

const Footer = () => {
  return (
    <div className="portfolio__footer section__padding">
      <div className="portfolio__footer-links">
        <div className="portfolio__footer-links_logo">
          <h1>Yeonju Park</h1>
        </div>
        <div className="portfolio__footer-links_div">
          <h4>Explore</h4>
          <a href="#home">
            <p>Home</p>
          </a>
          <a href="#about">
            <p>About</p>
          </a>
          <a href="#projects">
            <p>Projects</p>
          </a>
          <a href="#experience">
            <p>Experience</p>
          </a>
        </div>
        <div className="portfolio__footer-links_div">
          <h4>Get In Touch</h4>
          <a href="mailto: yeonju.k.park@gmail.com" target="_blank" rel="noreferrer">
            <p>Email</p>
          </a>
          <a
            href="https://github.com/yeonjuparkk"
            target="_blank"
            rel="noreferrer"
          >
            <p>GitHub</p>
          </a>
          <a
            href="https://www.linkedin.com/in/yeonju-park-276753137/"
            target="_blank"
            rel="noreferrer"
          >
            <p>LinkedIn</p>
          </a>
        </div>
        <div className="portfolio__footer-links_div">
          <h4>Other</h4>
          <a
            href="https://drive.google.com/file/d/1zopSC_k85gqZ0y4emv6gDt0j5DLPYOlX/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
          <p>Resume</p>
          </a>
        </div>
      </div>

      <div className="portfolio__footer-copyright">
        <p>© 2025 Yeonju Park. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
