import { useState } from "react";
import "./App.css";
import { ROUTES } from "./constants/Constants";
import Header from "./layouts/Header";
import SideBar from "./layouts/SideBar";
import OrderPage from "./pages/OrderPage";
import Home from './pages/Home';
import Login from "./Login/Login.jsx";
import DataTable from "./pages/DataTable";

function App() {
	const [page, setPage] = useState(ROUTES.home);
	const [loggedIn, setLoggedIn] = useState(false);
	const handleLogin = () => {
		// Perform login logic, and if successful, set loggedIn to true
		setLoggedIn(true);
	  };

	if (loggedIn) {
		return (
			<>
				<Header />
				<div className="content">
					<SideBar />
					<div className="page-content">
						<OrderPage />
						{/* <Home /> */}
						{/* <DataTable /> */}

					</div>

				</div>
			</>
		);
	} else {
		return <Login onLogin={handleLogin}/>;
	}
}

export default App;
