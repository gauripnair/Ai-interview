import React from 'react';
import './Profile.css';
import fireIcon from './images/fire.png';
import chainIcon from './images/chain.png';
import performanceIcon from './images/performance.png';

const Profile = () => {
  return (
    <div className="profile-container">
      <h1 className="profile-title">PROFILE</h1>
      <div className="profile-card">
        <div className="profile-info">
          <div className="profile-avatar">
            <img
              src="https://via.placeholder.com/100"
              alt="Avatar"
              className="avatar"
            />
          </div>
          <div className="profile-details">
            <p><strong>Name:</strong> Your Name</p>
            <p><strong>Qualification:</strong> Your Qualification</p>
          </div>
        </div>
        <div className="profile-stats">
          <div className="stat">
            <p>Total No of Interviews</p>
            <div className="stat-value">5</div>
          </div>
          <div className="stat">
            <p>Overall Score</p>
            <div className="score-circle">
              <span>80%</span>
            </div>
          </div>
          <div className="strength-weakness strength-column">
            <p className="column-title">
              <img src={fireIcon} alt="Strength Icon" className="icon" />
              Strength
            </p>
            <div className="box strength-box"></div>
          </div>
          <div className="strength-weakness weakness-column">
            <p className="column-title">
              <img src={chainIcon} alt="Weakness Icon" className="icon" />
              Weakness
            </p>
            <div className="box weakness-box"></div>
          </div>
          <div className="strength-weakness improvement-column">
            <p className="column-title">
              <img src={performanceIcon} alt="Improvement Icon" className="icon" />
              Improvement
            </p>
            <div className="box improvement-box"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
