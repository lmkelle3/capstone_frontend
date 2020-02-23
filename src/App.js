import React from "react";
import TopNav from "./components/Navigation/TopNav";
import SideNav from "./components/Navigation/SideNav";
import ClaimsCenter from "./components/Claims/ClaimsCenter";
import MessageMain from "./components/ComCenter/MessageMain";
import Login from "./components/Login";
import NewClaimForm from "./components/Claims/ClaimsForm/NewClaimForm";
import LossInput from "./components/Claims/ClaimsForm/LossInput";
import ClaimsMain from "./components/Claims/ClaimsMain";
import ClaimDate from "./components/Claims/ClaimsForm/ClaimDate";

import { BrowserRouter as Router, Route } from "react-router-dom";
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
            <Route exact path="/login" component={Login} />
            {/* <Route exact path="/profile" component={Profile} /> */}
            <Route exact path="/" component={ClaimsMain} />
            <Route exact path="/claims" component={ClaimsCenter} />
            <Route exact path="/messages" component={MessageMain} />
            <Route exact path="/form" component={NewClaimForm} />
            {/* Form Steps: */}
            <Route exact path="/form/step1" component={LossInput} />
            <Route exact path="/form/step2" component={ClaimDate} />
            {/* <Route exact path="/form/step3" component={PolicyType} />
            <Route exact path="/form/step4" component={ItemType} />
            <Route exact path="/form/step5" component={PoliceReport} />
            <Route exact path="/form/step6" component={Price} />
            <Route exact path="/form/step7" component={PayInfo} />
            <Route exact path="/form/step8" component={ClaimComplete} /> */}
          </Col>
        </Row>
      </Col>
    </Router>
  );
}

export default App;
