import React, { Fragment } from "react";
import ClaimsList from "./ClaimsList";
import MessageMain from "../ComCenter/MessageMain";
import {
  Typography,
  Card,
  Paper,
  CardHeader,
  Button,
  Grid,
  Container,
  CssBaseline,
  Box
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RecipeReviewCard from "./CenterCard";
import { indigo } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
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
  root: {
    width: 400,
    height: 900,
    marginLeft: 25,
    marginBottom: 25
  },
  paper: {
    height: 140,
    width: 100
  },
  grid: {
    marginTop: 150,
    marginBottom: 50
  },
  avatar: {
    backgroundColor: indigo[500]
  }
}));

const ClaimsCenter = props => {
  const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.appBarSpacer} />
      <Grid container>
        <Grid container direction="row">
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  O
                </Avatar>
              }
              title="My Claims"
              subheader="September 14, 2016"
            />
            <ClaimsList />
          </Card>
          <Container maxWidth="lg" className={classes.container}>
            <Grid style={{ justifyContent: "center" }} container spacing={10}>
              <Box textAlign="center">
                <Typography>
                  <h1 className="display-3">Welcome to Claims!</h1>
                  <p className="lead">
                    The claims process is simple. Click the "File New Claim"
                    button below to begin the form to submit a claim for your
                    lost or stolen jewelry item. You will be contacted should we
                    have any questions or need any additional documentation in
                    order to process your claim further.
                  </p>
                  <hr className="my-2" />
                  <p>
                    By selecting the button below, you are consenting to filing
                    a claim against your insurance policy.
                  </p>
                </Typography>
              </Box>
              <Button href="/form" variant="contained" color="primary">
                File New Claim
              </Button>
            </Grid>
            <Grid
              container
              direction="row"
              className={classes.grid}
              justify="space-evenly"
              alignItems="center"
            >
              <RecipeReviewCard />
              <RecipeReviewCard />
              <RecipeReviewCard />
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ClaimsCenter;
