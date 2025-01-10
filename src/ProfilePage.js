import React from "react";
import "./ProfilePage.css"; // Create a new CSS file for styling

const ProfilePage = () => {
  return (
    <div className="profile-container">
      <h1 className="profile-title">PROFILE</h1>

      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            {/* Replace the placeholder with your profile image */}
            <img
              src="path_to_avatar_image.jpg"
              alt="Profile Avatar"
              className="avatar-img"
            />
          </div>
          <div className="profile-info">
            <p className="profile-name">Name: John Doe</p>
            <p className="profile-qualification">Qualification: B.Tech</p>
          </div>
        </div>

        <div className="profile-stats">
          <div className="stat-item">
            <p>Total No of Interviews</p>
            <div className="stat-value">5</div>
          </div>

          <div className="stat-item">
            <p>Overall Score</p>
            <div className="score-circle">
              <span>80%</span>
            </div>
          </div>
        </div>

        <div className="profile-strengths">
          <h2>Strength and Weakness</h2>
          <textarea
            className="strengths-input"
            placeholder="Enter strengths and weaknesses here..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
