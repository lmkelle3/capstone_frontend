import React, { Fragment } from "react";
import FormControl from "@material-ui/core/FormControl";
import { TextField, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  grid: {
    margin: "10px"
  }
}));

const Price = props => {
  const price = props.price;
  const setPrice = props.setPrice;
  const classes = useStyles();

  return (
    <Fragment>
      <Grid item className={classes.grid}>
        <Typography variant="h5" component="h3">
          Please enter the claimed value of your item including tax.
        </Typography>
      </Grid>
      <FormControl>
        <Grid item className={classes.grid}>
          <Grid container>
            <Typography variant="h4" className={classes.grid}>
              $
            </Typography>
            <TextField
              required
              id="price"
              label="Item Price"
              value={price}
              variant="outlined"
              onChange={e => setPrice(e.target.value)}
            />
          </Grid>
        </Grid>
      </FormControl>
    </Fragment>
  );
};

export default Price;
