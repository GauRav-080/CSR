import React from "react";
import Container from "@mui/material/Container";

const Footer = () => {
	return (
		<Container
			maxWidth="xl"
			disableGutters
			component="footer"
			sx={{
				position: "fixed",
				bottom: 0,
				textAlign: "center",
				fontSize: "0.75rem",
				py: 0.5,
				background: "#fff",
				borderTop: "2px solid lightgray",
				zIndex: (theme) => theme.zIndex.drawer + 1,
			}}
		>
			Copyright &copy; {new Date().getFullYear()} Sheridan Digital Express. All
			right reserved.
		</Container>
	);
};

export default Footer;
