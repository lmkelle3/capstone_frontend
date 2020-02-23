import React from "react";
import ClaimsList from "./ClaimsList";
import { Jumbotron, Button, Row, Col } from "reactstrap";

const ClaimsCenter = props => {
  return (
    <div className="mt-2">
      <Row>
        <Col>
          <Jumbotron>
            <h1 className="display-3">Welcome to Claims!</h1>
            <p className="lead">
              The claims process is simple. Click the "File New Claim" button
              below to begin the form to submit a claim for your lost or stolen
              jewelry item. You will be contacted should we have any questions
              or need any additional documentation in order to process your
              claim further.
            </p>
            <hr className="my-2" />
            <p>
              By selecting the button below, you are consenting to filing a
              claim against your insurance policy.
            </p>
            <p className="lead">
              <Button href="/form/step1" color="primary">
                File New Claim
              </Button>
            </p>
          </Jumbotron>
        </Col>
        <Col>
          <ClaimsList />
        </Col>
      </Row>
    </div>
  );
};

export default ClaimsCenter;
