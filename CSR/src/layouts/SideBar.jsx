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

const SideBar = ({setPage}) => {
	return (
		<div className="sidebar">
			<List component="nav">
				<SideBarList setPage={setPage} />
			</List>
		</div>
	);
};

export default SideBar;
