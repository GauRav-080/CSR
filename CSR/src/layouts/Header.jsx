import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material";

const Header = ({ setLoggedIn, setNavOpen }) => {
	//const [userName, setUserName] = useState("Nawyn Dsouza");
	const theme = useTheme();

	const handleClick = () => {
		setLoggedIn(false);
	};

	const handleMenuClick = () => {
		setNavOpen((n) => !n);
	};

	return (
		<AppBar
			position="sticky"
			sx={{
				flexDirection: "row",
				justifyContent: "center",
				alignItems: "center",
				bgcolor: "#fff",
				px: { xs: 1, md: 3 },
				zIndex: theme.zIndex.drawer + 1,
			}}
		>
			<IconButton
				onClick={handleMenuClick}
				sx={{
					display: { md: "none" },
					color: theme.palette.primary.main,
					mr: "auto",
				}}
			>
				<Menu />
			</IconButton>
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
					<Typography
						sx={{
							display: { xs: "none", md: "block" },
							color: "#1a1a1a",
							fontSize: "0.875rem",
						}}
					>
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
