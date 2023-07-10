import twitterIcon from "../../pictures/twitter-icon.png";
import facebookIcon from "../../pictures/facebook-icon.png";
import instagramIcon from "../../pictures/instagram-icon.png";
import githubIcon from "../../pictures/github-icon.png";

function Footer() {
	return (
		<footer>
			<img src={twitterIcon} alt="" />
			<img src={facebookIcon} alt="" />
			<img src={instagramIcon} alt="" />
			<img src={githubIcon} alt="" />
		</footer>
	);
}

export default Footer;
