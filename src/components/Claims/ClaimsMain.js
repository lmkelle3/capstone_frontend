/* eslint-disable default-case */
import React, { useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Paper, Typography, Button, MobileStepper } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

///Inputs imports
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

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
          <MobileStepper
            variant="progress"
            steps={3}
            position="static"
            activeStep={step}
            className={classes.stepper}
            nextButton={
              <Button size="small" onClick={nextStep} disabled={step === 3}>
                Next
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
