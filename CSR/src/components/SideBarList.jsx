import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AssignmentOutlined from "@mui/icons-material/AssignmentOutlined";
import ReceiptLongOutlined from "@mui/icons-material/ReceiptLongOutlined";
import {
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	useTheme,
} from "@mui/material";

import { ROUTES } from "../constants/Constants";

const sideList = [
	{
		name: "Home",
		icon: <HomeOutlinedIcon />,
		page: ROUTES.home,
	},

	{
		name: "DNP Orders",
		icon: <AssignmentOutlined />,
		page: ROUTES.dnpOrders,
	},
	{
		name: "Order Details",
		icon: <ReceiptLongOutlined />,
		page: ROUTES.orderDetails,
	},
];

const SideBarList = ({ setPage }) => {
	const [selectedIndex, setSelectedIndex] = React.useState(0);
	const theme = useTheme();

	const handleClick = (page, index) => {
		setSelectedIndex(index);
		setPage(page);
	};

	return sideList.map((item, index) => (
		<ListItem
			disableGutters
			disablePadding
			key={"li-" + item.name}
			sx={{
				color: "#fff",
				"& .MuiListItemIcon-root": {
					color: "#fff",
					minWidth: "40px",
				},
				"& .MuiListItemButton-root.Mui-selected, & .MuiListItemButton-root.Mui-selected:hover":
					{
						bgcolor: theme.palette.primary.main,
					},
			}}
		>
			<ListItemButton
				selected={selectedIndex === index}
				onClick={(e) => handleClick(item.page, index)}
			>
				<ListItemIcon>{item.icon}</ListItemIcon>
				<ListItemText primary={item.name} />
			</ListItemButton>
		</ListItem>
	));
};

export default SideBarList;
