import "./Timeline.css";

const Timeline = () => {
  return (
    <>
      <div className="portfolio__experience-heading">
        <h2>Timeline</h2>
      </div>
      <div class="portfolio__experience-timeline">
        <div class="portfolio__experience-timeline container left">
          <div class="portfolio__experience-timeline content">
            <h2>May 2022 - Present</h2>
            <p>Software Engineer at Cargill</p>
            <p>
              Developed reusable microservices for APIs and products used across
              the enterprise
            </p>
          </div>
        </div>
        <div class="portfolio__experience-timeline container right">
          <div class="portfolio__experience-timeline content">
            <h2>Sep 2020 - May 2022</h2>
            <p>Process Engineer at Cargill</p>
            <p>
              Directly oversaw the refinery production with a team of 11
              operators
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
