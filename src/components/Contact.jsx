import { useState } from "react";
import { send } from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [showContact, setShowContact] = useState(false);
  const [showSuccess, setSuccess] = useState(false);
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID.toString(),
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID.toString(),
      toSend,
      process.env.REACT_APP_EMAILJS_API_KEY.toString()
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSuccess(true);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="portfolio__contact">
      <div className="portfolio__contact-content">
        <div className="portfolio__contact-title">
          <h3>Ready to book a session with me?</h3>
        </div>
        <div className="portfolio__contact-btn">
          <button type="button" onClick={() => setShowContact(!showContact)}>
            Click Here
          </button>
        </div>
        {showContact && (
          <>
            {!showSuccess && (
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
                  <textarea
                    type="text"
                    name="message"
                    placeholder="Your message"
                    value={toSend.message}
                    onChange={handleChange}
                    rows="6"
                    cols="50"
                  />
                  <button type="submit">Get Started!</button>
                </form>
              </div>
            )}
            {showSuccess && (
              <div className="portfolio__contact-title">
                <h4>
                  Your message has been sent! <br /> Yeonju will reach out to
                  you soon.
                </h4>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Contact;
