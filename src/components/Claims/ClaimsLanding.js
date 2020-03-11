import React, { Fragment } from "react";
import { Typography, Button, Grid, Container, Box } from "@material-ui/core";
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

const ClaimsLanding = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid style={{ justifyContent: "center" }} container spacing={10}>
        <Box textAlign="center">
          <Typography>
            <h1 className="display-3">Welcome to Claims!</h1>
            <p className="lead">
              The claims process is simple. Click the "File New Claim" button
              below to begin the form to submit a claim for your lost or stolen
              jewelry item. You will be contacted should we have any questions
              or need any additional documentation in order to process your
              claim further.
            </p>
            <hr className="my-2" />
            <p>
              By selecting the button below, you are consenting to filing a
              claim against your insurance policy.
            </p>
          </Typography>
        </Box>
        <Button href="/form" variant="contained" color="primary">
          File New Claim
        </Button>
      </Grid>
    </Container>
  );
};

export default ClaimsLanding;
