import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import TimelineOppositeContent, {
	timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import "../css/TimeLine.css";
export default function TimeLineC({ events }) {
	console.log(events);
	return (
		<Timeline
			sx={{
				[`& .${timelineOppositeContentClasses.root}`]: {
					flex: 0.2,
				},
			}}
		>
			{events &&
				events.map((item, index) => (
					<TimelineItem key={index} >
						<TimelineOppositeContent color="textSecondary">
							<Typography
								sx={{
									fontWeight: "bold",
									fontSize: 12,
									// textAlign: "center",
								}}
							>{item.dateTime}
								
							</Typography>
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot />
							{index !== events.length - 1 && <TimelineConnector />}
						</TimelineSeparator>
						<TimelineContent sx={{}}><Typography
								sx={{
									// fontWeight: "bold",
									fontSize: 12,
									// textAlign: "center",
								}}
							>
								{item.description}
							</Typography></TimelineContent>
					</TimelineItem>
				))}
		</Timeline>

	
	);
}
