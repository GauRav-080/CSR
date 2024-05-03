import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import {
	Divider,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import HubIcon from '@mui/icons-material/Hub';
import {
	AssignmentOutlined,
	BuildOutlined,
	CategoryOutlined,
	DescriptionOutlined,
	ManageAccountsOutlined,
	NotificationsOutlined,
	ReceiptLongOutlined,
} from "@mui/icons-material";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { ROUTES } from "../constants/Constants";
const sideList = [
	{
		name: "Home",
		icon: <HomeOutlinedIcon />,
		page: ROUTES.home,
	},
	{
		name: "Notifications",
		icon: <NotificationsOutlined />,
	},
	{
		name: "Orders",
		icon: <AssignmentOutlined />,
		subList: true,
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
		icon: <HubIcon />,
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
const SubList = ({ open, setPage }) => {
	const handleClick = (page = '') => {
		setPage(page);
	};
	return (
		<Collapse in={open} timeout="auto" unmountOnExit>
			<List component="div" disablePadding>
				<ListItemButton sx={{ pl: 4 }} onClick={(e) => handleClick(ROUTES.recentOrders)}>
					<ListItemText primary="Recent Orders" />
				</ListItemButton>
				<ListItemButton sx={{ pl: 4 }}>

					<ListItemText primary="On Waits Orders" />
				</ListItemButton>
				<ListItemButton sx={{ pl: 4 }}>

					<ListItemText primary="Failed Orders" />
				</ListItemButton>
				<ListItemButton sx={{ pl: 4 }}>

					<ListItemText primary="In Process Orders" />
				</ListItemButton>
				<ListItemButton sx={{ pl: 4 }}>

					<ListItemText primary="Search Orders" />
				</ListItemButton>
			</List>
		</Collapse>
	);
}
const SideBarList = ({ setPage }) => {
	const [open, setOpen] = React.useState(false);

	const handleClick = (page = '') => {
		setPage(page);
	};

	const handleDropdown = () => {
		setOpen(!open);
	}
	return sideList.map((item, index) => (
		<>
			<ListItemButton onClick={item.subList ? handleDropdown : ((e) => handleClick(item.page))}>
				<ListItemIcon>{item.icon}</ListItemIcon>
				<ListItemText primary={item.name} />
				{item.subList && (open && item.subList ? <ExpandLess /> : <ExpandMore />)}

			</ListItemButton>
			{item.subList && <SubList open={open} setPage={setPage} />}
		</>
	));
};

export default SideBarList;
