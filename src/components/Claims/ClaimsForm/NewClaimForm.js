/* eslint-disable default-case */
import "date-fns";
import React, { useState } from "react";
import { Typography, Grid, Paper, Button } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { addClaim } from "../../../store/Claims/actions";
import { useHistory } from "react-router-dom";
///Stepper Imports
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
//Components Imports
import LossInput from "./LossInput";
import ClaimDate from "./ClaimDate";
import PolicyType from "./PolicyType";
import ItemType from "./ItemType";
import PoliceReport from "./PoliceReport";
import Price from "./Price";
import PayInfo from "./PayInfo";
import ClaimComplete from "../ClaimComplete";

///Grid & Stepper Styling///
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

///Stepper Function to Retreive Steps///
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

///////////////////////////////////Component Code//////////////////////////////////////
const NewClaimForm = props => {
  const history = useHistory();
  const theme = useTheme();

  /////////////////FormState///////////////

  // const [inputs, setInputs] = React.useState({
  //   lossCategory: "",
  //   lossType: "",
  //   claimDetails: "",
  //   claimDate: Date,
  //   policyType: "",
  //   scheduled: "scheduled",
  //   unscheduled: "unscheduled",
  //   other: "other",
  //   jusrisdiction: "jusrisdiction",
  //   caseNumber: "caseNumber",
  //   reportDate: "reportDate",
  //   noPr: "noPr",
  //   price: "price",
  //   payInfo: "payInfo"
  // });

  //LossInput State
  const [lossCategory, setLossCategory] = useState("");
  const [lossType, setLossType] = useState("");
  const [claimDetails, setClaimDetails] = useState("");

  //ClaimDate State
  const [claimDate, setClaimDate] = useState(new Date());

  //PolicyType State
  const [policyType, setPolicyType] = useState("");

  //ItemType State
  const [scheduled, setScheduled] = useState(false);
  const [unscheduled, setUnscheduled] = useState(false);
  const [other, setOther] = useState(false);

  //PoliceReport State
  const [jusrisdiction, setJurisdiction] = useState("");
  const [caseNumber, setCaseNumber] = useState("");
  const [reportDate, setReportDate] = useState(new Date());
  const [noPr, setNoPr] = useState(false);

  //Price State
  const [price, setPrice] = useState("");

  //PayInfo State
  const [payInfo, setPayInfo] = useState("");

  // New claim object
  const newClaim = {
    user_id: 8,
    lossCategory: lossCategory,
    lossType: lossType,
    claimDetails: claimDetails,
    claimDate: claimDate,
    policyType: policyType,
    scheduled: scheduled,
    unscheduled: unscheduled,
    other: other,
    jusrisdiction: jusrisdiction,
    caseNumber: caseNumber,
    reportDate: reportDate,
    noPr: noPr,
    price: price,
    payInfo: payInfo
  };

  ///Function to Implement Switch Case for Form Steps///
  function formSteps(currentStep) {
    switch (currentStep) {
      case 0:
        return (
          <LossInput
            props={props}
            lossCategory={lossCategory}
            setLossCategory={setLossCategory}
            lossType={lossType}
            setLossType={setLossType}
            claimDetails={claimDetails}
            setClaimDetails={setClaimDetails}
          />
        );
      case 1:
        return <ClaimDate props={props} newClaim={newClaim} />;
      case 2:
        return <PolicyType props={props} newClaim={newClaim} />;
      case 3:
        return <ItemType props={props} newClaim={newClaim} />;
      case 4:
        return <PoliceReport props={props} newClaim={newClaim} />;
      case 5:
        return <Price props={props} newClaim={newClaim} />;
      case 6:
        return <PayInfo props={props} newClaim={newClaim} />;
      case 7:
        return <ClaimComplete props={props} newClaim={newClaim} />;
    }
  }

  /////Constants for tracking Steps/////
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

  // Component methods
  const handleDateChange = date => {
    setClaimDate(date);
    setReportDate(date);
  };

  // const handleInputChange = e => {
  //   let { name, value } = e.target;
  //   setInputs({
  //     ...inputs,
  //     [name]: value
  //   });
  // };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addClaim(newClaim));

    history.push("/claims");
  };

  const dispatch = useDispatch();
  return (
    <div className={classes.root}>
      <Grid container>
        <Paper>
          <Grid item>
            <Stepper currentStep={currentStep} alternativeLabel>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
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
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={nextStep}
                    >
                      {currentStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </Grid>
                </div>
              </div>
            )}
          </div>
        </Paper>
      </Grid>
    </div>
  );
};

export default NewClaimForm;
