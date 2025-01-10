import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-header">
        <h1>LOGIN</h1>
      </div>
      <div className="login-form">
        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Email Address" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password" />
        </div>
        <div className="remember-me">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember Me</label>
        </div>
        <button className="login-btn">Log In</button>
        <Link to="/signup" className="forgot-password">Forgot Password?</Link>
        <div className="signup-link">
          <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;