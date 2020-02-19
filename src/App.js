import React from "react";
import TopNav from "./components/Navigation/TopNav";
import SideNav from "./components/Navigation/SideNav";
import ClaimsMain from "./components/Claims/ClaimsMain";

import { Row, Col } from "reactstrap";

function App() {
  return (
    <Row>
      <Col>
        <TopNav />
        <Row>
          <Col xs="3">
            <SideNav />
          </Col>
          <Col sm="6">
            <ClaimsMain />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default App;
