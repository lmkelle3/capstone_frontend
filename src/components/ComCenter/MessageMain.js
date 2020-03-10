import React, { Fragment } from "react";
import { Typography, Button } from "@material-ui/core";
import MessagesList from "./MessagesList";

const MessageMain = props => {
  return (
    <Fragment>
      <Typography>Message Main</Typography>
      <MessagesList />
      <Button color="primary">File New Claim</Button>
    </Fragment>
  );
};

export default MessageMain;
