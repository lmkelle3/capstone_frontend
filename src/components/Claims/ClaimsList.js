import React, { Fragment } from "react";
import Claim from "./Claim";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import {
  Grid,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  Typography,
  CssBaseline
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: 10,
    display: "flex",
    padding: 5
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: theme.spacing(4, 0, 2)
  }
}));

const ClaimsList = (state, props) => {
  const classes = useStyles();
  const claims = useSelector(state => state.claims);

  let listOfClaims = claims.map(claim => (
    <Claim claim={claim} key={claim.id} />
  ));

  return (
    <Fragment>
      <CssBaseline />
      <Paper variant="outlined" elevation={3} className={classes.root}>
        {/* <Paper>
          <Typography variant="h5">My Claims:</Typography>
        </Paper> */}
        <List>{<Grid item>{listOfClaims}</Grid>}</List>
      </Paper>
    </Fragment>
  );
};

export default ClaimsList;
