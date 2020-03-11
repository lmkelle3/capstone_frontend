import React, { useEffect } from "react";
import TopNav from "./components/Navigation/TopNav";
import ClaimsCenter from "./components/Claims/ClaimsCenter";
import MessageMain from "./components/ComCenter/MessageMain";
import MessageForm from "./components/ComCenter/MessageForm";
import Login from "./components/Login";
import NewClaimForm from "./components/Claims/ClaimsForm/NewClaimForm";
import ClaimComplete from "./components/Claims/ClaimsForm/ClaimComplete";
import BottomNav from "./components/Navigation/BottomNav";

import { useDispatch } from "react-redux";
import { getAllClaims } from "../src/store/Claims/actions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { getAllMessages } from "./store/Messages/actions";

import { Grid } from "@material-ui/core";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllClaims());
    dispatch(getAllMessages());
  });
  return (
    <Router>
      <TopNav />
      <Switch>
        <Route exact path="/" component={Login} />
        {/* <Route exact path="/profile" component={Profile} /> */}
        <Route exact path="/claims" component={ClaimsCenter} />
        <Route exact path="/form" component={NewClaimForm} />
        <Route exact path="/messages" component={MessageMain} />
        <Route exact path="/messageform" component={MessageForm} />
        <Route exact path="/complete" component={ClaimComplete} />
      </Switch>
      <BottomNav />
    </Router>
  );
}

export default App;
