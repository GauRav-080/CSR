import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import {
	Divider,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import {
	AssignmentOutlined,
	BuildOutlined,
	CategoryOutlined,
	DescriptionOutlined,
	ManageAccountsOutlined,
	NotificationsOutlined,
	ReceiptLongOutlined,
} from "@mui/icons-material";
const sideList = [
	{
		name: "Home",
		icon: <HomeOutlinedIcon />,
	},
	{
		name: "Notifications",
		icon: <NotificationsOutlined />,
	},
	{
		name: "Orders",
		icon: <AssignmentOutlined />,
	},
	{
		name: "Service Management",
		icon: <ManageAccountsOutlined />,
	},
	{
		name: "Products",
		icon: <CategoryOutlined />,
	},
	{
		name: "Distributions",
		icon: <HomeOutlinedIcon />,
	},
	{
		name: "Transactions",
		icon: <ReceiptLongOutlined />,
	},
	{
		name: "SDS",
		icon: <DescriptionOutlined />,
	},
	{
		name: "Admin Tools",
		icon: <BuildOutlined />,
	},
];

const SideBarList = () => {
	return sideList.map((item) => (
		<>
			<ListItemButton>
				<ListItemIcon>{item.icon}</ListItemIcon>
				<ListItemText primary={item.name} />
			</ListItemButton>
		</>
	));
};

export default SideBarList;
