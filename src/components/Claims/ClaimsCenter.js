import React, { Fragment } from "react";
import ClaimsList from "./ClaimsList";
import ClaimsLanding from "./ClaimsLanding";
import MessageMain from "../ComCenter/MessageMain";
import {
  Typography,
  Button,
  Grid,
  Container,
  CssBaseline,
  Box
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    marginTop: "60px"
  },
  container: {
    paddingBottom: theme.spacing(4)
  }
}));

const ClaimsCenter = props => {
  const classes = useStyles();

  console.log("props", props);

  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.appBarSpacer} />
      <Grid container direction="row">
        <ClaimsList />
        {props.match.path == "/messages" ? <MessageMain /> : <ClaimsLanding />}
      </Grid>
    </Fragment>
  );
};

export default ClaimsCenter;
