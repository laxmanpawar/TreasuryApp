import React from 'react';
import '../styles/StatsCard.css';

const StatsCard = ({ title, value, change, color }) => {
  return (
    <div className={`stats-card ${color}`}>
      <h4>{title}</h4>
      <h2>{value}</h2>
      <p>{change}</p>
    </div>
  );
};

export default StatsCard;
