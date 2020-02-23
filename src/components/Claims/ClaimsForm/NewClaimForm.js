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
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
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

const NewClaimForm = props => {
  const classes = useStyles();

  const {
    title,
    setTitle,
    details,
    setDetails,
    address,
    setAddress,
    zipCode,
    setZipCode,
    selectedDate
  } = props;

  const { handleDateChange, handleSubmit } = props;

  return (
    <form
      className={classes.form}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Grid container>
        <Grid item sm={12}>
          <TextField
            required
            id="title"
            label="Claim Title"
            defaultValue={title}
            fullWidth
            variant="outlined"
            className={classes.title}
            onChange={e => setTitle(e.target.value)}
          />
        </Grid>

        <Grid item sm={6}>
          <TextField
            id="details"
            label="Claim details"
            defaultValue={details}
            variant="outlined"
            multiline
            rows="6"
            className={classes.details}
            onChange={e => setDetails(e.target.value)}
          />
        </Grid>

        <TextField
          required
          id="address"
          label="Claim location"
          defaultValue={address}
          variant="outlined"
          className={classes.address}
          onChange={e => setAddress(e.target.value)}
        />

        <TextField
          required
          id="zipCode"
          label="Zip Code"
          defaultValue={zipCode}
          variant="outlined"
          onChange={e => setZipCode(e.target.value)}
        />
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

            <KeyboardTimePicker
              required
              margin="normal"
              id="claimTime"
              label="Claim time"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change time"
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </Grid>
    </form>
  );
};

export default NewClaimForm;
