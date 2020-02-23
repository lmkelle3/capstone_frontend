import React, { Fragment } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  Paper,
  TextField,
  Typography,
  Grid,
  Button,
  Avatar,
  IconButton,
  GridListTile,
  GridListTileBar,
  GridList
} from "@material-ui/core";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import CloseIcon from "@material-ui/icons/Close";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
// LossInput imports
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
// ItemType imports
import clsx from "clsx";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";

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

const NewClaimForm = props => {
  //Function that styles Radio Buttons
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

  const {
    title,
    setJurisdiction,
    details,
    setDetails,
    address,
    setCaseNumber,
    price,
    setPrice,
    selectedDate
  } = props;

  const { handleDateChange, handleSubmit } = props;

  //Selects
  const [inputs, setInputs] = React.useState("");
  const handleChange = event => {
    setInputs(event.target.value);
  };

  return (
    <form
      className={classes.form}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Grid container>
        <Grid item sm={12}>
          {/* LossInput */}
          <Typography variant="h5" component="h3">
            Please enter your Loss Type and Description of your Loss.
          </Typography>
          <FormControl className={classes.margin}>
            <InputLabel id="demo-customized-select-label">
              Loss Category
            </InputLabel>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={inputs}
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={inputs}>Lost</MenuItem>
              <MenuItem value={inputs}>Burglary/Theft</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.margin}>
            <InputLabel htmlFor="demo-customized-select-native">
              Loss Type
            </InputLabel>
            <NativeSelect
              id="demo-customized-select-native"
              value={inputs}
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <option value="" />
              <option value={inputs}>Lost and not Found</option>
              <option value={inputs}>Theft</option>
            </NativeSelect>
          </FormControl>
          <FormControl className={classes.margin}>
            <Grid item sm={6}>
              <TextField
                id="details"
                label="Enter claim details"
                defaultValue={details}
                variant="outlined"
                multiline
                rows="6"
                className={classes.details}
                onChange={e => setDetails(e.target.value)}
              />
            </Grid>
          </FormControl>
          {/* Claim Date */}
          <Typography variant="h5" component="h3">
            Please select the approximate date that this occurred.
          </Typography>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                required
                margin="normal"
                id="claimDate"
                label="Claim date"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
          {/* PolicyType */}
          <Typography variant="h5" component="h3">
            Please select the applicable policy.
          </Typography>
          <FormControl className={classes.margin}>
            <InputLabel id="demo-customized-select-label">
              Policy Type
            </InputLabel>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={inputs}
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={inputs}>Valuable Personal Property</MenuItem>
            </Select>
          </FormControl>
          {/* ItemType */}
          <Typography variant="h5" component="h3">
            Please select the applicable item type.
          </Typography>
          <FormControl component="fieldset">
            <FormLabel component="legend">Personal Property:</FormLabel>
            <RadioGroup
              defaultValue="unscheduled"
              aria-label="unscheduled"
              name="customized-radios"
            >
              <FormControlLabel
                value="unscheduled"
                control={<StyledRadio />}
                label="Unscheduled"
              />
              <FormControlLabel
                value="scheduled"
                control={<StyledRadio />}
                label="Scheduled"
              />
              <FormControlLabel
                value="other"
                control={<StyledRadio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
          {/* Police Report */}
          <Typography variant="h5" component="h3">
            Please enter your police report details.
          </Typography>
          <FormControl component="fieldset">
            <TextField
              required
              id="jurisdiction"
              label="Jurisdiction Name"
              defaultValue={title}
              fullWidth
              variant="outlined"
              className={classes.title}
              onChange={e => setJurisdiction(e.target.value)}
            />

            <TextField
              required
              id="caseNumber"
              label="Case Number"
              defaultValue={address}
              variant="outlined"
              className={classes.address}
              onChange={e => setCaseNumber(e.target.value)}
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <KeyboardDatePicker
                  required
                  margin="normal"
                  id="prDate"
                  label="Report date"
                  format="MM/dd/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>

            <RadioGroup
              defaultValue="pr"
              aria-label="pr"
              name="customized-radios"
            >
              <FormControlLabel
                value="pr"
                control={<StyledRadio />}
                label="I do not have a Police Report"
              />
            </RadioGroup>
          </FormControl>
          {/* Price */}
          <Typography variant="h5" component="h3">
            Please enter the claimed value of your item including tax.
          </Typography>
          <FormControl>
            <TextField
              required
              id="price"
              label="Item Price"
              defaultValue={price}
              variant="outlined"
              onChange={e => setPrice(e.target.value)}
            />
          </FormControl>
          {/* Payment Info */}
          <Typography variant="h5" component="h3">
            Please select your preferred payment account.
          </Typography>
          <FormControl>
            <InputLabel id="demo-customized-select-label">
              Account Preference
            </InputLabel>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={inputs}
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={inputs}>Bank of Tomorrow</MenuItem>
              <MenuItem value={inputs}>Bank of Today</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </form>
  );
};

export default NewClaimForm;
