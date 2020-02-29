import React from "react";
import FormControl from "@material-ui/core/FormControl";
import { TextField, Typography, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

const Price = () => {
  //Selects
  const [inputs, setInputs] = React.useState({
    lossCategory: "",
    lossType: "",
    claimDetails: "",
    claimDate: "",
    policyType: "",
    itemType: "",
    jusrisdiction: "",
    caseNumber: "",
    reportDate: "",
    price: "",
    payInfo: ""
  });

  const dispatch = useDispatch();

  const handleChange = event => {
    setInputs(event.target.value);
  };

  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
        <Typography variant="h5" component="h3">
          Please enter the claimed value of your item including tax.
        </Typography>
        <FormControl>
          <TextField
            required
            id="price"
            label="Item Price"
            value={inputs.price}
            variant="outlined"
            onChange={handleChange}
          />
        </FormControl>
      </Grid>
    </div>
  );
};

export default Price;
