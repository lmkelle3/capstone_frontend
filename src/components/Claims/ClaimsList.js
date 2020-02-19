import React from "react";
import Claim from "./Claim";
import { useSelector } from "react-redux";
import {
  ListGroup,
  Card,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Row,
  Col
} from "reactstrap";

const ClaimsList = () => {
  const claims = useSelector(state => state.claims);
};
