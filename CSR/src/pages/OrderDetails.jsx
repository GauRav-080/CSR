import { Label } from "@mui/icons-material";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import TimeLineC from "../components/TimeLineC";
import Heading from "../components/Heading";
// import TimeLineC from '../components/TimeLineC'

const OrderDetails = () => {
	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: "left",
		borderRadius: 0,
		fontWeight: 600,
		color: theme.palette.text.secondary,
	}));
	const orderDetailsData = [
		{ Label: "Publisher", value: "Elsevier Health scenice" },
		{ Label: "Order Number", value: "1114707" },
		{ Label: "Order Status", value: "COMPLETED" },
		{ Label: "Order Primary Step", value: "OPS_ORDER_SUBMITTED" },
		{
			Label: "Order Secondary Step",
			value: "OSS_ORDER_STATUS_NOTICE_RECIEVED",
		},
		{ Label: "Process Status", value: "SUCCESS" },
		{ Label: "DNP Order Status", value: "COMPLETED" },
		{ Label: "Order Date", value: "3/11/2024" },
		{ Label: "Order Released", value: "3/11/2024" },
		{
			Label: "Other Information",
			value: "Product Information Distributtion Information",
		},
		{ Label: "Order File Name", value: "TEST_03112408133_CPI-UK.xml" },
		{
			Label: "Order File Path",
			value: "\\sggs-app4-test\\gates\\UGate\\order\\archived",
		},
		{
			Label: "Description",
			value: "--",
		},
	];

	const events = [
		{
			title: "Event 1",
			description: "Description of Event 1",
			date: "2024-05-13",
		},
		{
			title: "Event 2",
			description: "Description of Event 2",
			date: "2024-05-15",
		},
		{
			title: "Event 3",
			description: "Description of Event 3",
			date: "2024-05-17",
		},
		// Add more events as needed
	];

	const orderReceivedTimeline = [
		{ description: "OSS_SDE_ORDER_VERIFIED", dateTime: "3/11/2024 8:14:51 AM" },
		{ description: "OSS_ORDER_DB_POPULATED", dateTime: "3/11/2024 8:14:57 AM" },
		{ description: "OSS_ORDER_XML_PARSED", dateTime: "3/11/2024 8:15:51 AM" },
	];

	const orderDataValidateTimeline = [
		{ description: "OSS_PRODUCTS_FOUND", dateTime: "3/11/2024 8:16:51 AM" },
	];
	const orderSubmittedTimeline = [
		{ description: "OSS_ORDER_JSON_CREATED", dateTime: "3/11/2024 8:17:28 AM" },
		{ description: "OSS_ORDER_SOX_CREATED", dateTime: "3/11/2024 8:18:59 AM" },
		{ description: "OSS_ORDER_SOX_SENT", dateTime: "4/11/2024 8:14:51 AM" },
		{
			description: "OSS_ORDER_SOX_ACKNOWLEDGMENT_RECIEVED",
			dateTime: "4/11/2024 8:14:51 AM",
		},
		{
			description: "OSS_ORDER_STATUS_NOTICE_RECIEVED",
			dateTime: "6/11/2024 8:14:51 AM",
		},
	];

	return (
		<Box component="div" sx={{ paddingTop: "15px" }}>
			<Heading title={"Order Details"} />
			<Box>
				<Paper
					elevation={5}
					sx={{
						p: 2,
						// margin: 'auto',
						ml: 1,
						mr: 3,
						mb: 3,
						flexGrow: 1,
						backgroundColor: (theme) =>
							theme.palette.mode === "dark" ? "#1A2027" : "#fff",
					}}
				>
					{/* <table>
						<tbody>
							{orderDetailsData.map((item, index) => {
								console.log(item);
								return (
									<>
										<tr>
											<th
												align="left"
												style={{
													fontSize: "14px",
													// borderBottom:"1px solid black"
												}}
											>
												{item.Label}:
											</th>
											<td
												align="left"
												style={{
													paddingLeft: "5%",
													width: "80%",
													fontSize: "14px",
													// borderBottom:"1px solid black"
												}}
											>
												{item.value}
											</td>
										</tr>
									</>
								);
							})}
						</tbody>
					</table> */}

					<Grid container spacing={0.2}>
						{orderDetailsData.map((item, index) => {
							return (
								<>
									<Grid item xs={6} md={4}>
										<Item>{item.Label}</Item>
										{/* <Typography>{item.Label}</Typography> */}
									</Grid>
									<Grid item xs={6} md={8}>
										<Item sx={{ color: "black" }}>{item.value}</Item>
									</Grid>
								</>
							);
						})}
					</Grid>
				</Paper>
			</Box>
			<Heading title={"Order Process Steps"} />
			
			<Paper
				elevation={5}
				sx={{
					p: 2,
					// margin: 'auto',
					ml: 1,
					mr: 3,
					mb: 3,
					flexGrow: 1,
					backgroundColor: (theme) =>
						theme.palette.mode === "dark" ? "#1A2027" : "#fff",
				}}
			>
				<Box
					sx={{
						marginBottom: "-20px",
					}}
				>
					<Box
						sx={{
							fontWeight: "bold",
							ml: 1.5,

							fontSize: 16,
						}}
					>
						<Typography
							sx={{
								display: "inline",
								fontWeight: "bold",
								mx: 0.9,
								fontSize: 14,
							}}
							variant="button"
							display="block"
						>
							OPS_ORDER_RECEIVED
						</Typography>
					</Box>
					<TimeLineC events={orderReceivedTimeline} />
				</Box>
				<Box sx={{ marginBottom: "-20px" }}>
					<Box
						sx={{
							fontWeight: "bold",
							ml: 1.5,

							fontSize: 16,
						}}
					>
						<Typography
							sx={{
								display: "inline",
								fontWeight: "bold",
								mx: 0.9,
								fontSize: 14,
							}}
							variant="button"
							display="block"
						>
							OPS_ORDER_DATA_VALIDATED
						</Typography>
					</Box>
					<TimeLineC events={orderDataValidateTimeline} />
				</Box>
				<Box
					sx={{
						marginBottom: "-20px",
					}}
				>
					<Box
						sx={{
							fontWeight: "bold",
							ml: 1.5,

							fontSize: 16,
						}}
					>
						<Typography
							sx={{
								display: "inline",
								fontWeight: "bold",
								mx: 0.9,
								fontSize: 14,
							}}
							variant="button"
							display="block"
						>
							OPS_ORDER_SUBMITTED
						</Typography>
					</Box>
					<TimeLineC events={orderSubmittedTimeline} />
				</Box>
			</Paper>
			<Box className="page-detail">
				<h3>Status Notification</h3>
			</Box>
			<Heading title={"Order Details Table"} />

			<Box className="page-detail">
				<h3>Comments</h3>
			</Box>
			<Heading title={"Message"} />
			<Paper
				elevation={5}
				sx={{
					p: 2,
					// margin: 'auto',
					ml: 1,
					mr: 3,
					mb: 3,
					flexGrow: 1,
					backgroundColor: (theme) =>
						theme.palette.mode === "dark" ? "#1A2027" : "#fff",
				}}
			>
				<Typography>
					Currently no Order Comment exists for selected order
				</Typography>
			</Paper>
		</Box>
	);
};

export default OrderDetails;
