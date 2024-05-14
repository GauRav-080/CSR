import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

const Header = ({ setLoggedIn }) => {
	//const [userName, setUserName] = useState("Nawyn Dsouza");

	const handleClick = () => {
		setLoggedIn(false);
	};

	return (
		<AppBar
			position="sticky"
			sx={{
				flexDirection: "row",
				justifyContent: "center",
				alignItems: "center",
				bgcolor: "#fff",
				px: 3,
				zIndex: (theme) => theme.zIndex.drawer + 1,
			}}
		>
			<img
				style={{
					height: "1.875rem",
					width: "max-content",
				}}
				src="../src/assets/images/header-logo.png"
				alt="Select Header Logo"
			/>
			<Toolbar
				disableGutters
				variant="dense"
				sx={{
					gap: 1,
					ml: "auto",
					p: 0,
				}}
			>
				<Toolbar
					disableGutters
					variant="dense"
					sx={{
						gap: 1,
					}}
				>
					<Avatar sx={{ width: 32, height: 32, fontSize: "0.875rem" }}>
						ND
					</Avatar>
					<Typography color="#1a1a1a" fontSize="0.875rem">
						Nawyn Dsouza
					</Typography>
				</Toolbar>

				<Divider orientation="vertical" variant="middle" flexItem />
				<Button variant="text" onClick={handleClick}>
					Sign Out
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
