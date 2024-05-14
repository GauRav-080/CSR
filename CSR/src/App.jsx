import { useState } from "react";
import "./App.css";
import Login from "./pages/Login.jsx";
import Page from "./layouts/Page.jsx";
import Footer from "./layouts/Footer.jsx";
import Container from "@mui/material/Container";

function App() {
	const [loggedIn, setLoggedIn] = useState(true);
	const handleLogin = () => {
		setLoggedIn(true);
	};

	return (
		<Container disableGutters maxWidth="xl">
			{loggedIn ? (
				<Page setLoggedIn={setLoggedIn} />
			) : (
				<Login onLogin={handleLogin} />
			)}
			<Footer />
		</Container>
	);
}

export default App;
