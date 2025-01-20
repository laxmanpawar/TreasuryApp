import React from "react";
import '../App.css';
import InflowOutflowChart from '../components/InflowOutflowChart';

export const BankwiseBalance = () => {
    return (
        <div className="rightPage">
            <h1>Bankwise Balance</h1>
        </div>
    );
};

export const CashInflowsOutflows = () => {
    return (
        <div className="rightPage">
            <InflowOutflowChart />
        </div>
    );
};