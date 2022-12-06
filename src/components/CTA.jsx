import { useState } from "react";
import "./cta.css";

const CTA = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="portfolio__cta">
      <div className="portfolio__cta-content">
        <h3>Ready to book a session with me?</h3>
        <div className="portfolio__cta-btn">
          <button type="button" onClick={() => setShowContact(!showContact)}>
            Click Here
          </button>
        </div>
        {showContact && (
          <>
            {/* TODO: Turn into a form */}
            <div className="portfolio__header-content__input">
              <input type="email" placeholder="Your Email Address" />
              <button type="button">Get Started</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CTA;
