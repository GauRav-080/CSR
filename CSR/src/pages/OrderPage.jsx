import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import "../css/OrderPage.css";
import {
  OutlinedInput,
  ListItemText,
  Button,
} from "@mui/material";
import DataTable from "./DataTable";
import DatePickers from "../components/DatePickers";
import MultiSelect from "../components/MultiSelect";


const OrderPage = () => {

  const [toDate, setToDate] = useState(null);
  const [fromDate, setFromDate] = useState(null);
  const [CSRStatus, setCSRStatus] = useState([]);
  const [DNPOrderStatus, setDNPOrderStatus] = useState([]);
  const handleSearch = () => {
    // Your search logic here
    console.log('From Date:', fromDate);
    console.log('To Date:', toDate);
    console.log('CSR Status:', CSRStatus);
    console.log('DNP Order Status:', DNPOrderStatus);
  };

  return (
    <div className="conatiner">
      {/* <div className="page-detail">
        <h3>Recent Orders</h3>
      </div> */}
      <div className="input-section">
        <div className="date-section">
          <div className="select-container">
            {/* <label>From</label> */}
             <DatePickers
             label="From Date"
             value={fromDate}
             onChange={(date) => setFromDate(date)}
             renderInput={(props) => <TextField {...props} />}/>
          </div>
          <div className="select-container">
            {/* <label>To</label> */}
            <DatePickers 
            label="To Date"
            value={toDate}
            onChange={(date) => setToDate(date)}
            renderInput={(props) => <TextField {...props} />}/>
          </div>
          <div className="select-container">
            {/* <label>CSR Status</label> */}
            <MultiSelect
             label="CSR Status" 
             value={CSRStatus}
             onChange={(event) => setCSRStatus(event.target.value)}
              />
             
          </div>
          <div className="select-container">
            {/* <label>DNP OrderStatus</label> */}
            <MultiSelect
             label="DNP Order Status"
             value={DNPOrderStatus}
             onChange={(event) =>  setDNPOrderStatus(event.target.value)}
              />
             
          </div>

          <div className="select-container"><Button variant="contained" onClick={handleSearch}>Search</Button></div>
          
        </div>

        <div className="lower-input">
        {/* <Button variant="contained" onClick={handleSearch}>Search</Button> */}
        </div>
      </div>
      <hr className="horizontal-line"></hr>
      <div className="table-check">
      <DataTable />
      </div>
      
    </div>
  );
};

export default OrderPage;
