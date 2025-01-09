import React from "react";
import { useNavigate } from "react-router-dom";
import "./SplashScreen.css";

const SplashScreen = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/next");
  };

  return (
    <div className="splash-container">
      <header className="header">
        <div className="logo">AI ASSIST</div>
        <button className="login-button">Login</button>
      </header>
      <main className="main-content">
        <div className="content">
          <h1>AI INTERVIEW</h1>
          <h2>ASSISTANT</h2>
          <button className="get-started" onClick={handleGetStarted}>
            GET STARTED
          </button>
        </div>
      </main>
    </div>
  );
};

export default SplashScreen; // Ensure this line is present
