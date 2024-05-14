import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import SideBarList from "../components/SideBarList";

const SideBar = ({ setPage, drawerWidth, navOpen, setNavOpen }) => {
	const handleNavClose = () => {
		setNavOpen(false);
	};
	return (
		<>
			<Drawer
				variant="permanent"
				sx={{
					display: { xs: "none", md: "block" },
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

			<Drawer
				variant="temporary"
				open={navOpen}
				onClose={handleNavClose}
				sx={{
					display: { xs: "block", md: "none" },
					flexShrink: 0,
					width: drawerWidth,
					overflow: "hidden",
					zIndex: (theme) => theme.zIndex.modal,
					// position: "fixed",
					// bgcolor: "#2a58ad",
					// minHeight: `calc(100vh - 70px)`,

					"& .MuiDrawer-paper": {
						// height: "max-content",
						width: drawerWidth,
						bgcolor: "#2a58ad",
						// position: "absolute",
						// border: "none",
					},
				}}
			>
				<List disablePadding>
					<SideBarList setPage={setPage} />
				</List>
			</Drawer>
		</>
	);
};

export default SideBar;
