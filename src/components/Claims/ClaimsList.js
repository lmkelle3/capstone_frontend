import React, { Fragment } from "react";
import Claim from "./Claim";
import { useSelector } from "react-redux";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Row,
  Col
} from "reactstrap";

const ClaimsList = () => {
  const claims = useSelector(state => state.claims);
  return (
    <Fragment>
      <Card>
        <CardBody>
          <CardTitle>Claims List</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default ClaimsList;
