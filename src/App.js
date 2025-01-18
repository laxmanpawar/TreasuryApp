

import "./App.css";
import Sidebar from "./components/Sidebar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import { Container, Row, Col } from "reactstrap";

import Dashboard from "./pages/Dashboard";
import { FundPosition, BankwiseBalance, CashInflowsOutflows } from "./pages/FundPosition";
import { CashFlows, DailyCashFlowPlanning, HistoricalCashFlow, ProjectedCashFlows } from "./pages/CashFlows";
import { ComplianceTracker, ComplianceTrackerCards, ComplianceTrackerList } from "./pages/ComplianceTracker";
import { AboutUs } from "./pages/AboutUs";

function App() {
    return (
        <Router>
          <Container>
            <Row>
              <Col md={4}>
                <Sidebar />
              </Col>
              <Col md={8}>
                <Routes>
                  <Route
                    path="/dashboard" exact
                    element={<Dashboard />}
                  />
                  <Route
                    path="/fundPosition" exact
                    element={<FundPosition />}
                  />
                  <Route
                    path="/fundPosition/bankwiseBalance" exact
                    element={<BankwiseBalance />}
                  />
                  <Route
                    path="/fundPosition/cashInflowsOutflows" exact
                    element={<CashInflowsOutflows />}
                  />
                  <Route
                    path="/cashFlows" exact
                    element={<CashFlows />}
                  />
                  <Route
                    path="/cashFlows/dailyCashFlowPlanning" exact
                    element={<DailyCashFlowPlanning />}
                  />
                  <Route
                    path="/cashFlows/historicalCashFlow" exact
                    element={<HistoricalCashFlow />}
                  />
                  <Route
                    path="/cashFlows/projectedCashFlows" exact
                    element={<ProjectedCashFlows />}
                  />
                  <Route
                    path="/complianceTracker" exact
                    element={<ComplianceTracker />}
                  />
                  <Route
                    path="/complianceTracker/complianceCards" exact
                    element={<ComplianceTrackerCards />}
                  />
                  <Route
                    path="/compliance/complianceList" exact
                    element={<ComplianceTrackerList />}
                  />
                  <Route
                    path="/aboutUs" exact
                    element={<AboutUs />}
                  />
                </Routes>
              </Col>
          </Row>
            </Container>
        </Router>
    );
}

export default App;
