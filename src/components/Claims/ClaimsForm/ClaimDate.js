import "date-fns";
import React, { Fragment } from "react";
import { Typography, Grid } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import FormControl from "@material-ui/core/FormControl";
import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  grid: {
    margin: "10px"
  }
}));

const ClaimDate = props => {
  const claimDate = props.claimDate;
  const setClaimDate = props.setClaimDate;
  const classes = useStyles();

  return (
    <Fragment>
      <Grid item className={classes.grid}>
        <Typography variant="h5" component="h3">
          Please select the approximate date that this occurred.
        </Typography>
      </Grid>
      <Grid item className={classes.grid}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              required
              margin="normal"
              id="date-picker-inline"
              label="Claim Date"
              format="MM/dd/yyyy"
              value={claimDate}
              onChange={setClaimDate}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </Grid>
    </Fragment>
  );
};
export default ClaimDate;
