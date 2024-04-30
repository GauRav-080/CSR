import { useState } from "react";
import "./App.css";
import { ROUTES } from "./constants/Constants";
import Header from "./layouts/Header";
import SideBar from "./layouts/SideBar";
import OrderPage from "./pages/OrderPage";
import Home from './pages/Home';

function App() {
	const [page, setPage] = useState(ROUTES.home);
	const [loggedIn, setLoggedIn] = useState(true);

	if (loggedIn) {
		return (
			<>
				<Header />
				<div className="content">
					<SideBar />
					<div className="page-content">
						<OrderPage />
						{/* <Home /> */}

					</div>

				</div>
			</>
		);
	} else {
		return <>Login</>;
	}
}

export default App;
