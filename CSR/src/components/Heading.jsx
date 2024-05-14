import { Box, Typography } from "@mui/material";
import React from "react";

const Heading = ({ title, boxSX, titleSX }) => {
	return (
		<Box
			sx={{
				color: "success.dark",
				ml: 0.9,
				mr: 3,
				py: 1,
				backgroundImage: "var(--blue-green-grad)",
			}}
		>
			<Typography
				sx={{
					color: "white",
					display: "inline",
					fontWeight: "bold",
					mx: 0.9,
					fontSize: 16,
				}}
				variant="button"
				display="block"
			>
				{title}
			</Typography>
		</Box>
	);
};

export default Heading;
