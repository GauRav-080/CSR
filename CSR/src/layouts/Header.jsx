import React from "react";
import "./Header.css";
import { HeaderTitle } from "../constants/Constants";
import { Avatar } from "@mui/material";

const Header = () => {
	return (
		<header className="header">
			<div className="header-logo"></div>
			<h4 className="header-title">{HeaderTitle}</h4>
			<div className="header-profile">
				<div className="user-profile">
					<Avatar className="user-avatar">UN</Avatar>
					<h5 className="user-name">User Name</h5>
				</div>
				|<button className="sign-out">Sign Out</button>
			</div>
		</header>
	);
};

export default Header;