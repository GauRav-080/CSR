import { createTheme } from "@mui/material";

const theme = createTheme({
	typography: {
		fontFamily: "Roboto, san-serif",
	},
	palette: {
		primary: {
			light: "#4fbbee",
			main: "#23aaea",
			dark: "#1876a3",
			contrastText: "#fff",
		},
		secondary: {
			light: "#86c65b",
			main: "#68B833",
			dark: "#488023",
			contrastText: "#fff",
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 768,
			md: 1024,
			lg: 1280,
			xl: 1600,
		},
	},
});

export default theme;
