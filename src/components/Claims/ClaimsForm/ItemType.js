import React from "react";
import { Typography, Grid } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
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

///function that styles the radio buttons
function StyledRadio(props) {
  const classes = useStyles();
  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

const ItemType = props => {
  const scheduled = props.scheduled;
  const setScheduled = props.setScheduled;
  const unscheduled = props.unscheduled;
  const setUnscheduled = props.setUnscheduled;
  const other = props.other;
  const setOther = props.setOther;

  return (
    <FormControl>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h5" component="h3">
            Please select the applicable item type.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Personal Property:</FormLabel>
            <RadioGroup
              defaultValue="unscheduled"
              aria-label="unscheduled"
              name="customized-radios"
            >
              <FormControlLabel
                value={unscheduled}
                control={<StyledRadio />}
                label="Unscheduled"
                onChange={e => setUnscheduled(e.target.value)}
              />
              <FormControlLabel
                value={scheduled}
                control={<StyledRadio />}
                label="Scheduled"
                onChange={e => setScheduled(e.target.value)}
              />
              <FormControlLabel
                value={other}
                control={<StyledRadio />}
                label="Other"
                onChange={e => setOther(e.target.value)}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </FormControl>
  );
};

export default ItemType;
