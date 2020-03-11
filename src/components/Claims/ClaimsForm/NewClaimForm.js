/* eslint-disable default-case */
import "date-fns";
import React, { useState } from "react";
import {
  Typography,
  Grid,
  Paper,
  Button,
  CssBaseline,
  Container
} from "@material-ui/core";
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
import ClaimComplete from "./ClaimComplete";

///Grid & Stepper Styling///

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    margin: 80
  },
  button: {
    margin: theme.spacing(1)
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    marginTop: "60px"
  },
  container: {
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(3),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  },
  grid: {
    margin: "10px"
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
  const [jurisdiction, setJurisdiction] = useState("");
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
    jurisdiction: jurisdiction,
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
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <LossInput
              props={props}
              lossCategory={lossCategory}
              setLossCategory={setLossCategory}
              lossType={lossType}
              setLossType={setLossType}
              claimDetails={claimDetails}
              setClaimDetails={setClaimDetails}
            />
          </Grid>
        );
      case 1:
        return (
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <ClaimDate
              props={props}
              newClaim={newClaim}
              claimDate={claimDate}
              setClaimDate={setClaimDate}
            />
          </Grid>
        );
      case 2:
        return (
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <PolicyType
              props={props}
              newClaim={newClaim}
              policyType={policyType}
              setPolicyType={setPolicyType}
            />
          </Grid>
        );
      case 3:
        return (
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <ItemType
              props={props}
              newClaim={newClaim}
              scheduled={scheduled}
              setScheduled={setScheduled}
              unscheduled={unscheduled}
              setUnscheduled={setUnscheduled}
              other={other}
              setOther={setOther}
            />
          </Grid>
        );
      case 4:
        return (
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <PoliceReport
              props={props}
              newClaim={newClaim}
              jurisdiction={jurisdiction}
              setJurisdiction={setJurisdiction}
              caseNumber={caseNumber}
              setCaseNumber={setCaseNumber}
              reportDate={reportDate}
              setReportDate={setReportDate}
              noPr={noPr}
              setNoPr={setNoPr}
            />
          </Grid>
        );
      case 5:
        return (
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Price
              props={props}
              newClaim={newClaim}
              price={price}
              setPrice={setPrice}
            />
          </Grid>
        );
      case 6:
        return (
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <PayInfo
              props={props}
              newClaim={newClaim}
              payInfo={payInfo}
              setPayInfo={setPayInfo}
            />
          </Grid>
        );
      case 7:
        return (
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <ClaimComplete
              props={props}
              handleSubmit={handleSubmit}
              confirmationData={confirmationData}
            />
          </Grid>
        );
    }
  }

  /////Constants for tracking Steps/////
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const nextStep = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const prevStep = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleSubmit = e => {
    console.log("event", e);
    e.preventDefault();

    dispatch(addClaim(newClaim));
    console.log("NewClaim", newClaim);
    history.push("/claims");
  };

  const dispatch = useDispatch();

  const confirmationData = {
    lossCategory: lossCategory,
    lossType: lossType,
    claimDetails: claimDetails,
    claimDate: claimDate,
    policyType: policyType,
    scheduled: scheduled,
    unscheduled: unscheduled,
    other: other,
    jurisdiction: jurisdiction,
    caseNumber: caseNumber,
    reportDate: reportDate,
    noPr: noPr,
    price: price,
    payInfo: payInfo
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid style={{ justifyContent: "center" }} container spacing={10}>
          <Grid item xs={11}>
            <Paper className={classes.paper}>
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map(label => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <React.Fragment>
                {activeStep === steps.length ? (
                  <React.Fragment>
                    <Typography className={classes.instructions}>
                      All steps completed
                    </Typography>
                    <Button color="primary" onClick={handleSubmit}>
                      Submit
                    </Button>
                  </React.Fragment>
                ) : (
                  <div>
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                    >
                      <Typography className={classes.instructions}>
                        {formSteps(activeStep)}
                      </Typography>
                    </Grid>
                    <div>
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        className={classes.grid}
                      >
                        <Button
                          disabled={activeStep === 0}
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
                          {activeStep === steps.length - 1 ? "Finish" : "Next"}
                        </Button>
                      </Grid>
                    </div>
                  </div>
                )}
              </React.Fragment>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default NewClaimForm;
