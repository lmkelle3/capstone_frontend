import React from "react";
import "date-fns";
import { Typography, Grid } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const ClaimDate = props => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const [inputs, setInputs] = React.useState({
    category: "",
    type: "",
    description: ""
  });

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
        <Typography variant="h5" component="h3">
          Please select the approximate date that this occurred.
        </Typography>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            {/* <form className={classes.form} noValidate autoComplete="off"> */}
            <KeyboardDatePicker
              required
              margin="normal"
              id="claimDate"
              label="Claim date"
              format="MM/dd/yyyy"
              value={inputs.claimDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
            {/* </form> */}
          </Grid>
        </MuiPickersUtilsProvider>
      </Grid>
    </div>
  );
};
export default ClaimDate;
