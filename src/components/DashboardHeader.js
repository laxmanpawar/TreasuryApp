import React from 'react';
import '../styles/DashboardHeader.css';
import { ReactComponent as NotificationIcon } from '../assets/notification-icon.svg';
import { ReactComponent as UserProfileIcon } from '../assets/user-profile.svg';

const DashboardHeader = () => {

  const today = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <header className="header">
      <div>
        <h2>Dashboard</h2>
      </div>
      <div className="profile-section">
        <span className="date-display">{today}</span>
        {/* Button with embedded SVG icon */}
        <button className="icon-button">
          <NotificationIcon className="icon" />
        </button>
        <button className="icon-button">
          <UserProfileIcon className="icon" />
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;