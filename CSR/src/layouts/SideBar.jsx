import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import SideBarList from "../components/SideBarList";

const SideBar = ({ setPage, drawerWidth }) => {
	return (
		<Drawer
			variant="permanent"
			sx={{
				flexShrink: 0,
				width: drawerWidth,
				overflow: "hidden",
				position: "fixed",
				bgcolor: "#2a58ad",
				minHeight: `calc(100vh - 70px)`,

				"& .MuiDrawer-paper": {
					height: "max-content",
					width: drawerWidth,
					bgcolor: "#2a58ad",
					position: "absolute",
					border: "none",
				},
			}}
		>
			<List disablePadding>
				<SideBarList setPage={setPage} />
			</List>
		</Drawer>
	);
};

export default SideBar;
