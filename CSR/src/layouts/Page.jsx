import React, { useState } from "react";
import Home from "../pages/Home";
import OrderPage from "../pages/OrderPage";
import OrderDetails from "../pages/OrderDetails";
import { ROUTES } from "../constants/Constants";
import Header from "./Header";
import Box from "@mui/material/Box";
import SideBar from "./SideBar";
import grey from "@mui/material/colors/grey";

const Content = ({ page }) => {
	switch (page) {
		case ROUTES.home:
			return <Home />;
		case ROUTES.dnpOrders:
			return <OrderPage />;
		case ROUTES.orderDetails:
			return <OrderDetails />;
		default:
			return <Home />;
	}
};

const drawerWidth = "200px";

const Page = ({ setLoggedIn }) => {
	const [page, setPage] = useState(ROUTES.home);
	return (
		<>
			<Header setLoggedIn={setLoggedIn} />
			<Box
				sx={{
					display: "flex",
					overflowX: "hidden",
				}}
			>
				<SideBar setPage={setPage} drawerWidth={drawerWidth} />
				<Box
					sx={{
						ml: drawerWidth,
						width: "100%",
						bgcolor: grey[100],
						pb: 3,
					}}
				>
					<Content page={page} />
				</Box>
			</Box>
		</>
	);
};

export default Page;
