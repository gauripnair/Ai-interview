import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import "./Login.css";

const Signup = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = () => {
    navigate("/homepage"); // Redirect to Homepage
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>
          Create an <span style={{ color: "#b07dfc" }}>Account!</span>
        </h1>
      </div>
      <div className="login-form">
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Username" />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Email Address" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password" />
        </div>
        <div className="input-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm Password"
          />
        </div>
        <button className="login-btn" onClick={handleLogin}>
          Log In
        </button>
        <div className="signup-link">
          <p>
            Already have an account? <a href="/New1">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;


