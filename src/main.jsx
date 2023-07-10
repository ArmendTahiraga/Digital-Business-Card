import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import "./style.css";

// eslint-disable-next-line react-refresh/only-export-components
function App() {
	return (
		<>
			<Header />
			<Main />
			<Footer />
		</>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
