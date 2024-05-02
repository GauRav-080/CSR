import React from 'react'
import '../css/Home.css';
import profileLogo from '../assets/images/profile-icon.png';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
	AssignmentOutlined,
	BuildOutlined,
	CategoryOutlined,
	DescriptionOutlined,
	ManageAccountsOutlined,
	NotificationsOutlined,
	ReceiptLongOutlined,
     
    
} from "@mui/icons-material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
 import HubIcon from '@mui/icons-material/Hub';
 
 import CloseIcon from '@mui/icons-material/Close';
 import MailIcon from '@mui/icons-material/Mail';
 import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
const homeDetails = [
    {
        name: "Notification",
        icon: <NotificationsOutlined />,

    },
    {
        name: "Order",
        icon: <AssignmentOutlined />,
    },
    {
        name: "Service Management",
        icon: <ManageAccountsOutlined />,
    },
    {
        name: "Products",
        icon: <CategoryOutlined />,
    },{
        name: "Distributions",
        icon: <HubIcon />,
    },
    {
        name: "Transactions",
        icon: <ReceiptLongOutlined />,
    },{
        name: "SDS",
        icon: <DescriptionOutlined />,
    },
    {
        name: "Admin Tools",
        icon: <BuildOutlined />,
    },
]
const ParagraphWithIcon = ({ icon, text }) => {
    const classes = useStyles();
  
    return (
      <Typography variant="body1" className={classes.paragraph}>
        <Icon className={classes.icon}>{icon}</Icon>
        {text}
      </Typography>
    );
  };
const Home = () => {
    return (
        <div className='home-conatiner'>
            <div className='page-detail'>
                <h3>
                    Home
                </h3>
            </div>

            <div className='welcome-banner'>
                <img className='profileImg' src={profileLogo} />
                <h4>
                    Welcome <span>Nawyn Dsouza</span>. You are Logged in as <span>Adminnistrator</span>.
                </h4>

            </div>
            <div className='accordin-content'>
                {homeDetails.map((item) => {
                    return(<><Accordion className='accordin-container'>
                        <AccordionSummary className='sss'
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            {item.name}
                            {item.icon}
                        </AccordionSummary>
                        <AccordionDetails className ="cd">
                        <MailIcon/>
                        There is Order Message <br></br>
                        <CloseIcon/>
                        There is failed Distributions message <br></br>
                        <EmojiFlagsIcon/>
                        There is flagged Signal.  
                        </AccordionDetails>
                         
                    </Accordion>
                    </>)
                    
                })}
                
            </div>

        </div>
    )
}

export default Home