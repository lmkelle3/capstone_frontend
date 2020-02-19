import React from "react";
import ClaimsOverview from "./ClaimsOverview";
import ClaimComplete from "./ClaimComplete";
// import * from "./ClaimsForm";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ClaimsMain = props => {
  return (
    <div>
      <Route exact path="/" component={ClaimsOverview} />
      <Route exact path="/" component={ClaimComplete} />
      {/* <Route exact path="/" component={ClaimsForm} /> */}
    </div>
  );
};

export default ClaimsMain;
