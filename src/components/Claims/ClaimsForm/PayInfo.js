import React, { Fragment } from "react";
import { Typography, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";

// LossInput imports
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";

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

const PayInfo = props => {
  const classes = useStyles();
  const payInfo = props.payInfo;
  const setPayInfo = props.setPayInfo;

  return (
    <Fragment>
      <Grid item className={classes.grid}>
        <Typography variant="h5" component="h3">
          Please select your preferred payment account.
        </Typography>
      </Grid>
      <FormControl className={classes.margin}>
        <Grid item className={classes.grid}>
          {/* <InputLabel htmlFor="demo-customized-select-native">
            Payment Information
          </InputLabel> */}
          <NativeSelect
            id="demo-customized-select-native"
            name="lossType"
            value={payInfo}
            onChange={e => setPayInfo(e.target.value)}
            input={<BootstrapInput />}
          >
            <option>Bank of Today</option>
            <option>Bank of Tomorrow</option>
          </NativeSelect>
        </Grid>
      </FormControl>
    </Fragment>
  );
};

export default PayInfo;
