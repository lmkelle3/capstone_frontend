import React, { Fragment } from "react";
import { Jumbotron, Button } from "reactstrap";

const MessageMain = props => {
  return (
    <Fragment>
      <Jumbotron>
        <h1 className="display-3">Messages Main</h1>
        <p className="lead">
          The claims process is simple. Click the "File New Claim" button below
          to begin the form to submit a claim for your lost or stolen jewelry
          item. You will be contacted should we have any questions or need any
          additional documentation in order to process your claim further.
        </p>
        <hr className="my-2" />
        <p>
          By selecting the button below, you are consenting to filing a claim
          against your insurance policy.
        </p>
        <p className="lead">
          <Button color="primary">File New Claim</Button>
        </p>
      </Jumbotron>
    </Fragment>
  );
};

export default MessageMain;
