// LoginPage.js

import React, { useState } from 'react';
import './Login.css'; // Import CSS file for styling
import logo from "../assets/images/header-logo.png";
import { FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., validation, API call, etc.
    console.log('Email:', email);
    console.log('Password:', password);
  };
   
  return (
    <div className="login-page">
      <div className="left-side">
          <h2>SHERIDAN GLOBAL GATEWAY SYSTEM -</h2>
           <p>CSR INTERFACE</p>
        </div>
       
        
        <div className="right-side" >
          <div className="sign-in" >
          <div className="logo">
          <img className='img-logo' src={logo} />
          <h2>Sign In</h2>
          </div>
          
          <div className='input-handle'>
          
             <form onSubmit={handleSubmit}>
            <div className="form-group">
           
            <Input
               id="prefix-adornment"
               placeholder="Enter your email*"
               endAdornment={
                  <InputAdornment position="end">
                     <MailIcon color="info" />
                  </InputAdornment>
               }
            />
             
            </div>
            <div className="form-group">
               
            <Input
               id="prefix-adornment"
               placeholder="Enter your password"
               endAdornment={
                  <InputAdornment position="end">
                     <VisibilityOffOutlinedIcon color="info" />
                  </InputAdornment>
               }
            />
             
            </div>
            <button type="submit">Sign In</button>
            <br></br>
            <br></br>
            <a href="#"   className="submit">Forgot Password?</a>
          </form>
          </div>
         
          </div>
          <div className="empty-div">

          </div>
        </div>
      </div>
       
  );
};

export default Login;
