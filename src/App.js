import React from "react";
import TopNav from "./components/Navigation/TopNav";
import SideNav from "./components/Navigation/SideNav";
import ClaimsCenter from "./components/Claims/ClaimsCenter";
import MessageMain from "./components/ComCenter/MessageMain";
import Login from "./components/Login";
import NewClaimForm from "./components/Claims/ClaimsForm/NewClaimForm";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        <Grid container>
          <Grid item xs={12}>
            <TopNav />
          </Grid>
          <Grid container direction="row" xs={12}>
            <Grid item xs={6} sm={3}>
              <SideNav />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Route exact path="/login" component={Login} />
              {/* <Route exact path="/profile" component={Profile} /> */}
              <Route exact path="/claims" component={ClaimsCenter} />
              <Route exact path="/messages" component={MessageMain} />
              <Route exact path="/form" component={NewClaimForm} />
            </Grid>
          </Grid>
        </Grid>
      </Router>
    </div>
  );
}

export default App;
