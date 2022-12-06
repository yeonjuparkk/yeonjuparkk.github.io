import { Project } from "../components";
import "./About.css";

const About = () => {
	return (
		<div className="portfolio__about section__margin" id="about">
			<div className="portfolio___about-project">
				<Project 
					title="Yeonju Park"
					text=""
				/>
			</div>
			<div className="portfolio__about-heading" >
				<h1 className="gradient__text">lorem</h1>
			</div>
			<div className="portfolio__about-container">
				<Project 
					title="Skills"
					text="JavaScript, React, Node.js, Java, Spring Framework, JUnit, PostgreSQL, Postman, HTML, CSS"
				/>
				<Project 
					title=""
					text=""
				/>
				<Project 
					title=""
					text=""
				/>
			</div>
		</div>
	);
}

export default About;
