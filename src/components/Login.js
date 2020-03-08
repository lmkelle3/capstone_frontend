import React, { Fragment } from "react";
import {
  Typography,
  TextField,
  Button,
  CssBaseline,
  Paper,
  Grid
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

const Login = () => {
  const classes = useStyles();
  return (
    <Fragment className="container text-center mt-4">
      <CssBaseline />
      <Paper elevation={3}>
        <Grid container direction="column" justify="center" alignItems="center">
          <form className={classes.root} noValidate autoComplete="off">
            <Grid item>
              <Typography variant="h5">Login</Typography>
            </Grid>
            <Grid item>
              <TextField
                id="filled-required"
                label="Email"
                type="email"
                autoComplete="current-email"
                variant="filled"
              />
            </Grid>
            <Grid item>
              <TextField
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
              />
            </Grid>
            <Grid item>
              <Button href="/claims" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </form>
        </Grid>
      </Paper>
    </Fragment>
  );
};

export default Login;
