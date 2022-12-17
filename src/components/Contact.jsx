import { useState } from "react";
import { send } from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [showContact, setShowContact] = useState(false);
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });

  console.log(
    process.env.EMAILJS_SERVICE_ID,
    process.env.EMAILJS_TEMPLAYE_ID,
    process.env.EMAILJS_API_KEY
  );

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLAYE_ID,
      toSend,
      process.env.EMAILJS_API_KEY
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

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
            <div className="portfolio__header-content__input">
              <form onSubmit={onSubmit}>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your name"
                  value={toSend.from_name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="reply_to"
                  placeholder="Your email"
                  value={toSend.reply_to}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="message"
                  placeholder="Your message"
                  value={toSend.message}
                  onChange={handleChange}
                />
                <button type="submit">Get Started!</button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Contact;
