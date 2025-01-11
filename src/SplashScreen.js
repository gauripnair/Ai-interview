import React from "react";
import { useNavigate } from "react-router-dom";
import "./SplashScreen.css";
import RobotImage from "./images/robot-profile.png"; // Update the path if necessary
import PersonImage from "./images/person-profile.png"; // Update the path if necessary

const SplashScreen = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login"); // Navigate to the New1.js (Login) page
  };

  return (
    <div className="splash-container">
      <header className="header">
        <div className="logo">AI ASSIST</div>
        <button className="login-button" onClick={() => navigate("/login")}>
          Login
        </button>
      </header>
      <main className="main-content">
        {/* Images placed on the sides */}
        <img src={RobotImage} alt="Robot Profile" className="robot-image" />
        <div className="content">
          <h1>AI INTERVIEW</h1>
          <h2>ASSISTANT</h2>
          <button className="get-started" onClick={handleGetStarted}>
            GET STARTED
          </button>
        </div>
        <img src={PersonImage} alt="Person Profile" className="person-image" />
      </main>
    </div>
  );
};

export default SplashScreen;



