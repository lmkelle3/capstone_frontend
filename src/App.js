import React from "react";
import TopNav from "./components/Navigation/TopNav";
import SideNav from "./components/Navigation/SideNav";
import ClaimsOverview from "./components/Claims/ClaimsOverview";
import MessageMain from "./components/ComCenter/MessageMain";
import Login from "./components/Login";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

function App() {
  return (
    <Router>
      <Col>
        <TopNav />
        <Row>
          <Col xs="3">
            <SideNav />
          </Col>
          <Col sm="6">
            <Route exact path="/" component={Login} />
            <Route exact path="/claims" component={ClaimsOverview} />
            <Route exact path="/messages" component={MessageMain} />
          </Col>
        </Row>
      </Col>
    </Router>
  );
}

export default App;
