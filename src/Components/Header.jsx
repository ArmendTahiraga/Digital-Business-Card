import personPhoto from "../../pictures/person-photo.png";
function Header() {
	return (
		<header>
			<img src={personPhoto} className="person" alt="" />
		</header>
	);
}

export default Header;
