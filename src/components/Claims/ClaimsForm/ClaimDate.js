import "date-fns";
import React from "react";
import { Grid } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import { Row, Col, Button } from "reactstrap";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

const ClaimDate = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <Col>
          <Row>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Date picker dialog"
              format="MM/dd/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
          </Row>
          <Row>
            <Button href="/form/step1" className="mr-2" color="primary">
              Back
            </Button>
            <Button href="/form/step3" color="primary">
              Next
            </Button>
          </Row>
        </Col>
      </Grid>
    </MuiPickersUtilsProvider>
  );
};
export default ClaimDate;
