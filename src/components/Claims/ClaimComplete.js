import React, { useState } from "react";
import { Paper, Typography, Grid, Button, CardMedia } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

//component styles
const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3, 2),
    marginTop: 10,
    color: theme.palette.text.primary,
    textAlign: "center"
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    marginTop: 10
  },
  root: {
    flexGrow: 1
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.primary
  },
  img: {
    height: 255,
    maxWidth: 400,
    overflow: "hidden",
    display: "block",
    width: "100%"
  },
  paper1: {
    padding: theme.spacing(3, 2),
    marginTop: 10,
    color: theme.palette.text.primary,
    textAlign: "center",
    backgroundColor: theme.palette.info.light
  },
  paper2: {
    padding: theme.spacing(3, 2),
    marginTop: 10,
    color: theme.palette.text.primary,
    textAlign: "center",
    backgroundColor: theme.palette.primary
  },
  paper3: {
    padding: theme.spacing(3, 2),
    marginTop: 10,
    color: theme.palette.text.primary,
    textAlign: "center",
    backgroundColor: theme.palette.info.main
  }
}));

const ClaimComplete = props => {
  const classes = useStyles();
  const theme = useTheme();

  const claim = props.claim;
  const prevStep = props.prevStep;
  const step = props.step;

  const {
    lossInput,
    claimDate,
    policyType,
    itemType,
    policeReport,
    price,
    payInfo
  } = props.claim;

  return (
    <Paper className={classes.paper1}>
      <Paper className={classes.paper3}>
        <Typography variant="h2">Confirm claim details:</Typography>
      </Paper>
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <Paper className={classes.paper2}>
            {/*Header */}
            <Typography variant="h1">
              {/*Title */}
              {claim.lossInput}
            </Typography>
            {/*Picture area*/}
            <Typography variant="body1">{claim.claimDate}</Typography>
          </Paper>
        </Grid>
        <Grid item sm={4}>
          {/*Details*/}
          <Paper className={classes.paper}>
            <Typography variant="body1">{claim.policyType}</Typography>
          </Paper>
        </Grid>
        <Grid item sm={4}>
          {/*Location*/}
          <Paper className={classes.paper}>
            <Typography variant="body1">{claim.itemType}</Typography>
          </Paper>
        </Grid>
        <Grid item sm={4}>
          <Paper className={classes.paper}>
            <Typography variant="body1">{claim.policeReport}</Typography>
          </Paper>
        </Grid>
        <Grid item sm={4}>
          <Paper className={classes.paper}>
            <Typography variant="body1">{claim.price}</Typography>
          </Paper>
        </Grid>
        <Grid item sm={4}>
          <Paper className={classes.paper}>
            <Typography variant="body1">{claim.payInfo}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ClaimComplete;
