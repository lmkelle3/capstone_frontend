import React, { useState, Fragment } from "react";
import { Paper, Typography, Grid, Button } from "@material-ui/core";
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

  return (
    <Fragment>
      <Paper>
        <Typography>Confirm claim details:</Typography>
        <Grid container spacing={3}>
          <Grid item sm={12}>
            <Typography variant="h1">{props.lossCategory}</Typography>
            <Typography variant="h1">{props.lossType}</Typography>
            <Typography variant="h1">{props.claimDetails}</Typography>
            <Typography variant="body1">{props.claimDate}</Typography>
          </Grid>
          <Grid item sm={4}>
            <Typography variant="body1">{props.jurisdiction}</Typography>
            <Typography variant="body1">{props.caseNumber}</Typography>
            <Typography variant="body1">{props.reportDate}</Typography>
          </Grid>
          <Grid item sm={4}>
            <Typography variant="body1">{props.policyType}</Typography>
            <Typography variant="body1">{props.scheduled}</Typography>
            <Typography variant="body1">{props.unscheduled}</Typography>
            <Typography variant="body1">{props.other}</Typography>
          </Grid>
          <Grid item sm={4}>
            <Typography variant="body1">{props.noPr}</Typography>
          </Grid>
          <Grid item sm={4}>
            <Typography variant="body1">{props.price}</Typography>
          </Grid>
          <Grid item sm={4}>
            <Typography variant="body1">{props.payInfo}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Fragment>
  );
};

export default ClaimComplete;
