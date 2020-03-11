import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Button,
  Paper,
  Container,
  CssBaseline
} from "@material-ui/core";
import { addMessage } from "../../store/Messages/actions";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [messageBody, setMessageBody] = React.useState("Controlled");

  const handleChange = e => {
    setMessageBody(e.target.value);
  };

  const handleSubmit = e => {
    dispatchEvent(addMessage(messageBody));
  };

  return (
    <Fragment>
      <form className={classes.root} noValidate autoComplete="off">
        <CssBaseline />
        <Container>
          <Paper>
            <TextField
              id="outlined-multiline-static"
              label="New Message"
              placeholder="Type your message here"
              multiline
              rows="4"
              variant="outlined"
              onChange={handleChange}
            />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Send
            </Button>
          </Paper>
        </Container>
      </form>
    </Fragment>
  );
}
