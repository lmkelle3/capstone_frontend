import "date-fns";
import React, { Fragment } from "react";
import clsx from "clsx";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import InputBase from "@material-ui/core/InputBase";
import DateFnsUtils from "@date-io/date-fns";
import { useDispatch } from "react-redux";
import { TextField, Typography, Grid } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  // ItemType Styling
  root: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5"
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)"
    }
  },
  checkedIcon: {
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""'
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3"
    }
  },
  grid: {
    margin: "10px"
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

const PoliceReport = props => {
  const jurisdiction = props.jurisdiction;
  const setJurisdiction = props.setJurisdiction;
  const caseNumber = props.caseNumber;
  const setCaseNumber = props.setCaseNumber;
  const reportDate = props.reportDate;
  const setReportDate = props.setReportDate;
  const noPr = props.noPr;
  const setNoPr = props.setNoPr;
  function StyledRadio(props) {
    const classes = useStyles();

    return (
      <Radio
        className={classes.root}
        disableRipple
        color="default"
        checkedIcon={
          <span className={clsx(classes.icon, classes.checkedIcon)} />
        }
        icon={<span className={classes.icon} />}
        {...props}
      />
    );
  }
  const classes = useStyles();

  // const dispatch = useDispatch();

  return (
    <Fragment>
      <Grid item className={classes.grid}>
        <Typography variant="h5" component="h3">
          Please enter your police report details.
        </Typography>
      </Grid>
      <FormControl component="fieldset">
        <Grid item className={classes.grid}>
          <TextField
            required
            id="jurisdiction"
            label="Jurisdiction Name"
            value={jurisdiction}
            fullWidth
            variant="outlined"
            className={classes.title}
            onChange={e => setJurisdiction(e.target.value)}
          />
        </Grid>
        <Grid item className={classes.grid}>
          <TextField
            required
            id="caseNumber"
            label="Case Number"
            value={caseNumber}
            variant="outlined"
            className={classes.address}
            onChange={e => setCaseNumber(e.target.value)}
          />
        </Grid>
        <Grid item className={classes.grid}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              required
              margin="normal"
              id="date-picker-inline"
              label="Report date"
              format="MM/dd/yyyy"
              value={reportDate}
              onChange={setReportDate}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item className={classes.grid}>
          <RadioGroup
            defaultValue="false"
            aria-label="pr"
            name="customized-radios"
          >
            <FormControlLabel
              value={noPr}
              control={<StyledRadio />}
              label="I do not have a Police Report"
              onChange={e => setNoPr(e.target.value)}
            />
          </RadioGroup>
        </Grid>
      </FormControl>
    </Fragment>
  );
};

export default PoliceReport;
