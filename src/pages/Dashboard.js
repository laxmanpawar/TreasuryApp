import React from 'react';
import Sidebar from '../components/Sidebar';
import DashboardHeader from '../components/DashboardHeader';
import StatsCard from '../components/StatsCard';
import ChartFrame from '../components/ChartFrame';
import CashFlowChart from '../components/CashFlowChart';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <main>
        <DashboardHeader />
        <div className="stats-grid">
          <StatsCard title="Total Available INR" value="3,360.50" change="↑ 8.5% from yesterday" color="yellow" />
          <StatsCard title="Previous Day Inflows" value="3,360.50" change="↑ 8.5% from yesterday" color="purple" />
          <StatsCard title="Previous Day Outflows" value="3,360.50" change="↓ 8.5% from yesterday" color="orange" />
        </div>

        <ChartFrame title="Cash Flow Movement">
          <CashFlowChart />
        </ChartFrame>
      </main>
    </div>
  );
};

export default Dashboard;
