import React, { Fragment } from "react";
import FormControl from "@material-ui/core/FormControl";
import { TextField, Typography, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

const Price = props => {
  const price = props.price;
  const setPrice = props.setPrice;

  // const dispatch = useDispatch();

  return (
    <Fragment>
      <Grid container direction="row" justify="center" alignItems="center">
        <Typography variant="h5" component="h3">
          Please enter the claimed value of your item including tax.
        </Typography>
        <FormControl>
          <TextField
            required
            id="price"
            label="Item Price"
            value={price}
            variant="outlined"
            onChange={e => setPrice(e.target.value)}
          />
        </FormControl>
      </Grid>
    </Fragment>
  );
};

export default Price;
