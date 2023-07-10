import twitterIcon from "../../pictures/twitter-icon.png";
import facebookIcon from "../../pictures/facebook-icon.png";
import instagramIcon from "../../pictures/instagram-icon.png";
import githubIcon from "../../pictures/github-icon.png";

function Footer() {
	return (
		<footer>
			<img src={twitterIcon} alt="" className="footer-icon" />
			<img src={facebookIcon} alt="" className="footer-icon" />
			<img src={instagramIcon} alt="" className="footer-icon" />
			<img src={githubIcon} alt="" className="footer-icon" />
		</footer>
	);
}

export default Footer;
