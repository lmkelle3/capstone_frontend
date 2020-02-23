import React, { useState } from "react";
import { format } from "date-fns";
import {
  Paper,
  Typography,
  Grid,
  Button,
  MobileStepper,
  CardMedia
} from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import { makeStyles, useTheme } from "@material-ui/core/styles";

//component styles
const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3, 2),
    marginTop: 10,
    color: theme.palette.text.primary,
    textAlign: "center"
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    marginTop: 10
  },
  root: {
    flexGrow: 1
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default
  },
  img: {
    height: 255,
    maxWidth: 400,
    overflow: "hidden",
    display: "block",
    width: "100%"
  },
  paper1: {
    padding: theme.spacing(3, 2),
    marginTop: 10,
    color: theme.palette.text.primary,
    textAlign: "center",
    backgroundColor: theme.palette.secondary.main
  },
  paper2: {
    padding: theme.spacing(3, 2),
    marginTop: 10,
    color: theme.palette.text.primary,
    textAlign: "center",
    backgroundColor: theme.palette.secondary.light
  },
  stepper: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.secondary.contrastText
  }
}));

const ClaimComplete = props => {
  const classes = useStyles();
  const theme = useTheme();

  const claim = props.claim;
  const prevStep = props.prevStep;
  const step = props.step;
  const selectedDate = props.selectedDate;

  //formatting date
  let claimDate = format(new Date(selectedDate), "MM/dd/yyyy hh:mm a");

  //Picture area
  //State and methods for picture stepper
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const { title, details, user_id, location, date_time } = props.claim;

  return (
    <Paper className={classes.paper1}>
      <Typography variant="h2">Confirm your claim</Typography>
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <Paper className={classes.paper2}>
            {/*Header */}
            <Typography variant="h1">
              {/*Title */}
              {claim.title}
            </Typography>

            {/*Picture area*/}

            <CardMedia className={classes.media} title={claim.title} />

            <MobileStepper
              className={classes.stepper}
              position="static"
              variant="text"
              activeStep={activeStep}
              nextButton={
                <Button color="inherit" size="small" onClick={handleNext}>
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  color="inherit"
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </Paper>
        </Grid>
        <Grid item sm={4}>
          {/*Details*/}
          <Paper className={classes.paper}>
            <Typography variant="body1">{claim.details}</Typography>
          </Paper>
        </Grid>
        <Grid item sm={4}>
          {/*Location*/}
          <Paper className={classes.paper}>
            <Typography variant="body1">{claim.location}</Typography>
          </Paper>
        </Grid>
        <Grid item sm={4}>
          <Paper className={classes.paper}>
            <Typography variant="body1">{claimDate}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ClaimComplete;
