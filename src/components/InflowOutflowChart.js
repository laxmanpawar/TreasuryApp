import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState, useEffect } from 'react';

const generateMonthlyData = (days) => Array.from({ length: days }, (_, i) => ({
    date: `${String(i + 1).padStart(2, '0')}-${new Date().getMonth() + 1}-2024`,
    inflows: Math.floor(Math.random() * 5000) + 1000,
    outflows: Math.floor(Math.random() * 5000) + 1000,
}));

const InflowOutflowChart = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
    const [chartData, setChartData] = useState([]);
    const [range, setRange] = useState([1, 31]);

    useEffect(() => {
        const daysInMonth = new Date(new Date().getFullYear(), selectedMonth + 1, 0).getDate();
        setChartData(generateMonthlyData(daysInMonth));
        setRange([1, daysInMonth]);
    }, [selectedMonth]);

    const filteredData = chartData.filter((_, index) => index + 1 >= range[0] && index + 1 <= range[1]);

    return (
        <div>
            <h1>Cash Inflows/Outflows</h1>
            <select value={selectedMonth} onChange={(e) => setSelectedMonth(Number(e.target.value))} className="mb-4 p-2 border rounded">
                {months.map((month, index) => (
                    <option key={month} value={index}>{month}</option>
                ))}
            </select>
            <Slider
                range
                min={1}
                max={chartData.length}
                value={range}
                onChange={(value) => setRange(value)}
                trackStyle={[{ backgroundColor: '#28a745' }]}
                handleStyle={[{ borderColor: '#28a745' }, { borderColor: '#dc3545' }]}
            />
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={filteredData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="inflows" stroke="#28a745" strokeWidth={3} dot={{ r: 4 }} />
                    <Line type="monotone" dataKey="outflows" stroke="#dc3545" strokeWidth={3} dot={{ r: 4 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default InflowOutflowChart;