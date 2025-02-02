import React from 'react';
import LoginForm from './LoginForm';
import { Link } from "react-router-dom";
import "../styles/Auth.css";


function Login({ onNavigateHome, onForgotPassword }) {

  return (
    <div className="auth-container">
      <div className="home-header">
        
        <img
          src="..\src\assets\TeamAassets\companyLogo.png" 
          alt="Logo"
          className="logo"
        />
      </div>
      
      <div className="auth-navi">
        <div className="home-button">
          <Link to="/">
          
            <button className='login-button'>Home</button>
           
          </Link>
        </div>
      </div>
      <div style={{display: "flex", justifyContent: "center"}}>
      <div style={{display: "flex", flexDirection: "column", alignItems: "start", }}>
      <div>
        <div className="auth-label">
          <h1>LOG IN</h1>
        </div>
      </div>
      <div className="auth-content">
        <div className="auth-sign">
          <LoginForm />
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Login;
