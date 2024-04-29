import React from "react";
import "./SideBar.css";
import {
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SideBarList from "../components/SideBarList";

const SideBar = () => {
	return (
		<div className="sidebar">
			<List component="nav">
				<SideBarList />
			</List>
		</div>
	);
};

export default SideBar;
