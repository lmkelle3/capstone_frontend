/* eslint-disable default-case */
import React, { useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Paper,
  TextField,
  Typography,
  Grid,
  Button,
  Avatar,
  MobileStepper
} from "@material-ui/core";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
///Inputs imports
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";

//Components
import NewClaimForm from "./ClaimsForm/NewClaimForm";
import ClaimComplete from "./ClaimComplete";

// Actions
import { addClaim } from "../../store/Claims/actions";

// TODO: Clean up styles and move to a file under the corresponding component
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: 10
  },
  form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1)
    },
    marginTop: 10
  },
  title: {
    margin: theme.spacing(1)
  },
  address: {
    margin: theme.spacing(1),
    width: 350
  },
  details: {
    width: 300
  },

  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6)
  },
  stepper: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(3, 2),
    marginTop: 10
  },
  avatarRoot: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

//Inputs Styling
const BootstrapInput = withStyles(theme => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  }
}))(InputBase);

const ClaimsMain = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  // Component style classes
  const classes = useStyles();
  const theme = useTheme();

  // State
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [clickedPicBtn, setClickedPicBtn] = useState(false);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [step, setStep] = useState(1);

  // New claim object
  const newClaim = {
    user_id: 8,
    title: title,
    details: details,
    location: `${address}, ${zipCode}`,
    date_time: selectedDate
  };

  //Selects
  const [age, setAge] = React.useState("");
  const handleChange = event => {
    setAge(event.target.value);
  };
  // Component methods
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addClaim(newClaim));

    history.push("/");
  };

  switch (step) {
    case 1:
      return (
        <Fragment>
          <Paper className={classes.root}>
            <Typography variant="h5" component="h3">
              Add your claim using the form below
            </Typography>
            <NewClaimForm
              title={title}
              setTitle={setTitle}
              details={details}
              setDetails={setDetails}
              address={address}
              setAddress={setAddress}
              zipCode={zipCode}
              setZipCode={setZipCode}
              clickedPicBtn={clickedPicBtn}
              setClickedPicBtn={setClickedPicBtn}
              selectedDate={selectedDate}
              handleDateChange={handleDateChange}
              handleSubmit={handleSubmit}
            />
          </Paper>
          {/* Form Inputs */}
          <FormControl className={classes.margin}>
            <InputLabel htmlFor="demo-customized-textbox">Age</InputLabel>
            <BootstrapInput id="demo-customized-textbox" />
          </FormControl>
          <FormControl className={classes.margin}>
            <InputLabel id="demo-customized-select-label">Age</InputLabel>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={age}
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.margin}>
            <InputLabel htmlFor="demo-customized-select-native">Age</InputLabel>
            <NativeSelect
              id="demo-customized-select-native"
              value={age}
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <option value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </FormControl>
          {/* Form Inputs End*/}
          <MobileStepper
            variant="progress"
            steps={3}
            position="static"
            activeStep={step}
            className={classes.stepper}
            nextButton={
              <Button size="small" onClick={nextStep} disabled={step === 3}>
                Preview
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button size="small" onClick={prevStep} disabled={step === 1}>
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Fragment>
      );
    case 2:
      return (
        <Fragment>
          <ClaimComplete
            prevStep={prevStep}
            claim={newClaim}
            step={step}
            selectedDate={String(selectedDate)}
          />
          <MobileStepper
            variant="progress"
            steps={3}
            position="static"
            activeStep={step}
            color="secondary"
            className={classes.stepper}
            nextButton={
              <Button
                type="submit"
                size="small"
                onClick={handleSubmit}
                disabled={step === 3}
              >
                Submit
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button size="small" onClick={prevStep} disabled={step === 1}>
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Fragment>
      );
  }
};

export default ClaimsMain;
