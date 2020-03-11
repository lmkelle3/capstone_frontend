import React from "react";
import {
  TextField,
  Typography,
  Grid,
  Box,
  FormControl
} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles, withStyles } from "@material-ui/core/styles";

// Form Styling
const useStyles = makeStyles(theme => ({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
      alignItems: "center",
      justifyContent: "center"
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
  ///Form Styling
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
    width: 280
  },
  upBtn: {
    marginLeft: 10
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    margin: theme.spacing(0.5)
  },
  avatarDiv: {
    display: "flex",
    padding: theme.spacing(1)
  },
  icon: {
    color: theme.palette.secondary.light
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

const LossInput = props => {
  const lossCategory = props.lossCategory;
  const setLossCategory = props.setLossCategory;
  const lossType = props.lossType;
  const setLossType = props.setLossType;
  const claimDetails = props.claimDetails;
  const setClaimDetails = props.setClaimDetails;
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h5" component="h3">
        Please enter your Loss Type and Description of your Loss.
      </Typography>
      <Grid item className={classes.grid}>
        <InputLabel>Loss Category</InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
          name="lossCategory"
          value={lossCategory}
          onChange={e => setLossCategory(e.target.value)}
          input={<BootstrapInput />}
        >
          <option>Lost</option>
          <option>Burglary/Theft</option>
        </NativeSelect>
      </Grid>
      <Grid item className={classes.grid}>
        <InputLabel>Loss Type</InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
          name="lossType"
          value={lossType}
          onChange={e => setLossType(e.target.value)}
          input={<BootstrapInput />}
        >
          <option>Lost and not Found</option>
          <option>Theft</option>
        </NativeSelect>
      </Grid>
      <Grid item className={classes.grid}>
        <TextField
          id="details"
          label="Enter claim details"
          name="claimDetails"
          value={claimDetails}
          variant="outlined"
          multiline
          rows="6"
          className={classes.details}
          onChange={e => setClaimDetails(e.target.value)}
        />
      </Grid>
    </React.Fragment>
  );
};

export default LossInput;
