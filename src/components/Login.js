import React, { Fragment } from "react";
import {
  Typography,
  TextField,
  Button,
  CssBaseline,
  Paper,
  Grid,
  Container
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  appBarSpacer: theme.mixins.toolbar,
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  },
  grid: {
    margin: "10px"
  }
}));

const Login = () => {
  const classes = useStyles();
  return (
    <Fragment className="container text-center mt-4">
      <CssBaseline />
      <div className={classes.appBarSpacer} />
      <Container className={classes.root}>
        <Paper elevation={3}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item className={classes.grid}>
              <Typography variant="h5">Login</Typography>
            </Grid>
            <Grid item className={classes.grid}>
              <TextField
                id="filled-required"
                label="Email"
                type="email"
                autoComplete="current-email"
                variant="filled"
              />
            </Grid>
            <Grid item className={classes.grid}>
              <TextField
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
              />
            </Grid>
            <Grid item className={classes.grid}>
              <Button href="/claims" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Fragment>
  );
};

export default Login;
