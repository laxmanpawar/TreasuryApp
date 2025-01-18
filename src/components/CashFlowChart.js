import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import '../styles/CashFlowChart.css';

const data = [
  { month: 'Jan', inflows: 1000, outflows: 400 },
  { month: 'Feb', inflows: 12000, outflows: 3000 },
  { month: 'Mar', inflows: 9000, outflows: 2000 },
  { month: 'Apr', inflows: 8000, outflows: 2500 },
  { month: 'May', inflows: 14000, outflows: 5000 },
  { month: 'Jun', inflows: 10000, outflows: 7000 },
  { month: 'Jul', inflows: 16000, outflows: 11000 },
  { month: 'Aug', inflows: 9000, outflows: 6000 },
  { month: 'Sep', inflows: 11000, outflows: 8000 },
  { month: 'Oct', inflows: 15000, outflows: 7000 },
  { month: 'Nov', inflows: 17000, outflows: 9000 },
  { month: 'Dec', inflows: 13000, outflows: 4000 },
];

const CashFlowChart = () => {
  return (
    <div className="chart">
      <h3>Cash Flow Movement</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorInflows" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorOutflows" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff7300" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ff7300" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="inflows" stroke="#8884d8" fillOpacity={1} fill="url(#colorInflows)" />
          <Area type="monotone" dataKey="outflows" stroke="#ff7300" fillOpacity={1} fill="url(#colorOutflows)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CashFlowChart;
