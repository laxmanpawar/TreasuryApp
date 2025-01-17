import React from 'react';
import '../styles/DashboardHeader.css';

const DashboardHeader = () => {
  return (
    <div className="header">
      <h1>Dashboard</h1>
      <div className="profile-section">
        <button>🔔</button>
        <img src="https://via.placeholder.com/35" alt="User" />
      </div>
    </div>
  );
};

export default DashboardHeader;
