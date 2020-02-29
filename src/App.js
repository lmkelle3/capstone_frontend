import React from "react";
import TopNav from "./components/Navigation/TopNav";
import SideNav from "./components/Navigation/SideNav";
import ClaimsCenter from "./components/Claims/ClaimsCenter";
import MessageMain from "./components/ComCenter/MessageMain";
import Login from "./components/Login";
import NewClaimForm from "./components/Claims/ClaimsForm/NewClaimForm";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
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
          <Grid containter spacing={4}>
            <Route exact path="/login" component={Login} />
            {/* <Route exact path="/profile" component={Profile} /> */}
            <Route exact path="/claims" component={ClaimsCenter} />
            <Route exact path="/messages" component={MessageMain} />
            <Route exact path="/form" component={NewClaimForm} />
          </Grid>
        </Row>
      </Col>
    </Router>
  );
}

export default App;
