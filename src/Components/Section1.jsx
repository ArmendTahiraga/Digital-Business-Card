import emailIcon from "../../pictures/email-icon.png";
import linkedinIcon from "../../pictures/linkedin-icon.png";

function Section1() {
	return (
		<section>
			<h2 className="section1-title">Laura Smith</h2>
			<p className="section1-job">Frontend Developer</p>
			<div className="button-container">
				<button className="email-button main-button">
					<img src={emailIcon} alt="" />
					Email
				</button>
				<button className="linkedin-button main-button">
					<img src={linkedinIcon} alt="" />
					Linkedin
				</button>
			</div>
		</section>
	);
}

export default Section1;
