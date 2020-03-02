import "date-fns";
import React from "react";
import { Typography, Grid } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const ClaimDate = props => {
  const claimDate = props.claimDate;
  const setClaimDate = props.setClaimDate;

  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
        <Typography variant="h5" component="h3">
          Please select the approximate date that this occurred.
        </Typography>
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
    </div>
  );
};
export default ClaimDate;
