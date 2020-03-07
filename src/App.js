import React from "react";
import TopNav from "./components/Navigation/TopNav";
import ClaimsCenter from "./components/Claims/ClaimsCenter";
import MessageMain from "./components/ComCenter/MessageMain";
import Login from "./components/Login";
import NewClaimForm from "./components/Claims/ClaimsForm/NewClaimForm";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <TopNav />
      <Switch>
        <Route exact path="/login" component={Login} />
        {/* <Route exact path="/profile" component={Profile} /> */}
        <Route exact path="/claims" component={ClaimsCenter} />
        <Route exact path="/messages" component={MessageMain} />
        <Route exact path="/form" component={NewClaimForm} />
      </Switch>
    </Router>
  );
}

export default App;
