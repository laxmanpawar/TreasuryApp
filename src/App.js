

import "./App.css";
import Sidebar from "./components/Sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import { BankwiseBalance, CashInflowsOutflows } from "./pages/FundPosition";
import { DailyCashFlowPlanning, HistoricalCashFlow, ProjectedCashFlows } from "./pages/CashFlows";
import { ComplianceTrackerCards, ComplianceTrackerList } from "./pages/ComplianceTracker";
import { AboutUs } from "./pages/AboutUs";
import { LoginPage } from "./pages/LoginPage";

function App() {
  return (
    <div>
      <LoginPage />
    </div>
    // <Router>
    //   <div className="main-container">
    //     <Sidebar />
    //     <Routes>
    //       <Route
    //         path="/"
    //         element={<Dashboard />}
    //       />
    //       <Route
    //         path="/fundPosition/bankwiseBalance" exact
    //         element={<BankwiseBalance />}
    //       />
    //       <Route
    //         path="/fundPosition/cashInflowsOutflows" exact
    //         element={<CashInflowsOutflows />}
    //       />
    //       <Route
    //         path="/cashFlows/dailyCashFlowPlanning" exact
    //         element={<DailyCashFlowPlanning />}
    //       />
    //       <Route
    //         path="/cashFlows/historicalCashFlow" exact
    //         element={<HistoricalCashFlow />}
    //       />
    //       <Route
    //         path="/cashFlows/projectedCashFlows" exact
    //         element={<ProjectedCashFlows />}
    //       />
    //       <Route
    //         path="/complianceTracker/complianceCards" exact
    //         element={<ComplianceTrackerCards />}
    //       />
    //       <Route
    //         path="/compliance/complianceList" exact
    //         element={<ComplianceTrackerList />}
    //       />
    //       <Route
    //         path="/aboutUs" exact
    //         element={<AboutUs />}
    //       />

    //       <Route path="*" element={<> not found</>} />
    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default App;
