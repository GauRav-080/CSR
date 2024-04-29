import { useState } from "react";
import "./App.css";
import { ROUTES } from "./constants/Constants";
import Header from "./layouts/Header";
import SideBar from "./layouts/SideBar";

function App() {
	const [page, setPage] = useState(ROUTES.home);
	const [loggedIn, setLoggedIn] = useState(true);

	if (loggedIn) {
		return (
			<>
				<Header />
				<div className="content">
					<SideBar />
					<div className="page-content"></div>
				</div>
			</>
		);
	} else {
		return <>Login</>;
	}
}

export default App;
