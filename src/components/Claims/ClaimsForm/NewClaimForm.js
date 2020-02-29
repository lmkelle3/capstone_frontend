import React, { useState, Fragment } from "react";
import {
  Typography,
  Grid,
  Paper,
  Button,
  MobileStepper,
  StepContent
} from "@material-ui/core";
import { makeStyles, withStyles, useTheme } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { addClaim } from "../../../store/Claims/actions";
import { useHistory } from "react-router-dom";
///Stepper Imports
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import InputBase from "@material-ui/core/InputBase";
import FormControl from "@material-ui/core/FormControl";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
//Style Import
// import Styles from "../../Harry/Styles";
//Components Imports
import LossInput from "./LossInput";
import ClaimDate from "./ClaimDate";
import PolicyType from "./PolicyType";
import ItemType from "./ItemType";
import PoliceReport from "./PoliceReport";
import Price from "./Price";
import PayInfo from "./PayInfo";
import ClaimComplete from "../ClaimComplete";

//Stepper Styling
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

///Stepper Function to Retreive Steps
function getSteps() {
  return [
    "LossInput",
    "Claim Date",
    "Policy Type",
    "ItemType",
    "PoliceReport",
    "Price",
    "PayInfo",
    "ClaimComplete"
  ];
}

//Component Code
const NewClaimForm = props => {
  // const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();

  ///Function to Implement Switch Case for Form Steps
  function formSteps(currentStep) {
    switch (currentStep) {
      case 0:
        return <LossInput />;
      case 1:
        return <ClaimDate />;
      case 2:
        return <PolicyType />;
      case 3:
        return <ItemType />;
      case 4:
        return <PoliceReport />;
      case 5:
        return <Price />;
      case 6:
        return <PayInfo />;
      case 7:
        return <ClaimComplete />;
    }
  }

  ///Constants for tracking steps and state
  const classes = useStyles();
  const [currentStep, setStep] = useState(0);
  const steps = getSteps();

  const nextStep = () => {
    setStep(currentStep + 1);
  };

  const prevStep = () => {
    setStep(currentStep - 1);
  };

  const handleReset = () => {
    setStep(1);
  };

  // State
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [clickedPicBtn, setClickedPicBtn] = useState(false);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");

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

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addClaim(newClaim));

    history.push("/");
  };

  //Selects
  const [inputs, setInputs] = React.useState({
    lossCategory: "",
    lossType: "",
    claimDetails: "",
    claimDate: "",
    policyType: "",
    itemType: "",
    jusrisdiction: "",
    caseNumber: "",
    reportDate: "",
    price: "",
    payInfo: ""
  });

  const dispatch = useDispatch();
  return (
    <div className={classes.root}>
      <Stepper currentStep={currentStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {currentStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {formSteps(currentStep)}
            </Typography>
            <div>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Button
                  disabled={currentStep === 0}
                  onClick={prevStep}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button variant="contained" color="primary" onClick={nextStep}>
                  {currentStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Grid>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewClaimForm;
