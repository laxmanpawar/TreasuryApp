import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>VITTI</h2>
      <ul>
        <li>Dashboard</li>
        <li>Fund Position</li>
        <li>Cash Flows</li>
        <li>Compliance Status</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default Sidebar;
