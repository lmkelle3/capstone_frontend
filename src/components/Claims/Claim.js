import React, { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Chip from "@material-ui/core/Chip";
import { Button } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";
import {
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

import { getOneClaim, deleteClaim } from "../../store/Claims/actions";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginLeft: 10
  },
  heading: {
    fontSize: theme.typography.pxToRem(18)
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20
  },
  details: {
    alignItems: "center"
  },
  column: {
    flexBasis: "33.33%",
    marginLeft: 10
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2)
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  }
}));

const Claim = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [update, setUpdate] = useState([]);

  // const getOneClaim = id => {
  //   dispatch(getOneClaim(id));
  // };

  const handleDelete = e => {
    e.preventDefault();
    dispatch(deleteClaim(props.claim.id));
    setUpdate([...update, props.claim.id]);
  };

  if (props.claim && props.claim.id) {
    return (
      <Fragment className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1c-content"
            id="panel1c-header"
          >
            <div className={classes.column}>
              <Typography className={classes.heading}>
                {props.claim.lossCategory}
              </Typography>
            </div>
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>
                Payment: ${props.claim.price}
              </Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <div className={classes.column} />
            <div className={classes.column}>
              <Chip label={props.claim.lossType} />
            </div>
            <div className={clsx(classes.column, classes.helper)}>
              <Typography variant="caption">
                {props.claim.claimDetails}
              </Typography>
            </div>
          </ExpansionPanelDetails>
          <Divider />
          <ExpansionPanelActions>
            <IconButton aria-label="delete">
              <DeleteOutlineIcon
                onClick={handleDelete}
                size="small"
                variant="contained"
                color="primary"
              />
            </IconButton>
            <Link
              to={{
                pathname: `/claims/edit/${props.claim.id}`,
                state: { claim: props.claim.id }
              }}
              className={classes.link}
            >
              <ListItem button>
                <ListItemIcon>
                  <EditIcon />
                </ListItemIcon>
              </ListItem>
            </Link>

            <Link to={`/claims/${props.claim.id}`}>
              <Button variant="contained" color="primary">
                Go to Claim
              </Button>
            </Link>
          </ExpansionPanelActions>
        </ExpansionPanel>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Typography>Sorry...This page cannot be found</Typography>
      </Fragment>
    );
  }
};

const mapStateToProps = (state, props) => {
  if (props.match) {
    return {
      claim: state.claims.find(
        claim => claim.id === Number(props.match.params.id)
      )
    };
  } else {
    return {};
  }
};

export default connect(mapStateToProps)(Claim);
