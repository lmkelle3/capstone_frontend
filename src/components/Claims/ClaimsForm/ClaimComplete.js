import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  grid: {
    margin: "10px"
  }
}));

const ClaimComplete = props => {
  // const confirmationData = props.confirmationData;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const confirmationData = props.confirmationData;

  const claimDate = Date(confirmationData.claimDate);
  const reportDate = Date(confirmationData.reportDate);

  console.log("CD", confirmationData);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Fragment>
      <Paper className={classes.grid}>
        <Grid item className={classes.grid}>
          <Typography variant="h4">Confirm Claim Details:</Typography>
        </Grid>
        <ExpansionPanel
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>Loss Input</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{confirmationData.lossCategory}</Typography>
            <Typography>{confirmationData.lossType}</Typography>
            <Typography>{confirmationData.claimDetails}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.heading}>Claim Date</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{claimDate}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography className={classes.heading}>Policy Type</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{confirmationData.policyType}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography className={classes.heading}>Item Type</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{confirmationData.scheduled}</Typography>
            <Typography>{confirmationData.unscheduled}</Typography>
            <Typography>{confirmationData.other}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
          >
            <Typography className={classes.heading}>Police Report</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{confirmationData.jurisdiction}</Typography>
            <Typography>{confirmationData.caseNumber}</Typography>
            <Typography>{reportDate}</Typography>
            <Typography>{confirmationData.noPr}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6bh-content"
            id="panel6bh-header"
          >
            <Typography className={classes.heading}>Price</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{confirmationData.price}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel7bh-content"
            id="panel7bh-header"
          >
            <Typography className={classes.heading}>
              Payment Information
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{confirmationData.payInfo}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Paper>
    </Fragment>
  );
};

export default ClaimComplete;
