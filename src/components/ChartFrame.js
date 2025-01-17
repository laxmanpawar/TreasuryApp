import React from 'react';
import '../styles/ChartFrame.css';

const ChartFrame = ({ title, children }) => {
  return (
    <div className="chart-frame">
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default ChartFrame;
