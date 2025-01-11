import React, { useState } from 'react';
import './Homepage.css'; // For styling
import { Link } from 'react-router-dom';

function HomePage() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="homepage">
      <header className="header">
        <Link to="/profile">
          <button className="button profile-button">PROFILE</button>
        </Link>
        <Link to="/">
          <button className="button logout-button">LOGOUT</button>
        </Link>
      </header>
      <main className="content">
        <h1>Welcome to AI Interview Assistant!</h1>
        <p>
          Our app is designed to help you prepare for interviews with AI-powered
          questions and personalized feedback. Whether you're a fresher or a
          professional, this platform provides an engaging and efficient way to
          sharpen your interview skills.
        </p>
        <p>
          Click the "Start Session" button to begin your interview journey and get one
          step closer to success!
        </p>

        <button className="session-button" onClick={togglePopup}>START SESSION</button>
      </main>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Select Session Type</h2>
            <Link to="/technical">
              <button className="popup-button">Technical</button>
            </Link>
            <Link to="/non-technical">
              <button className="popup-button">Non-Technical</button>
            </Link>
            <button className="popup-close" onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;


