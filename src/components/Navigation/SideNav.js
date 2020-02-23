import React from "react";
import { Card, ListGroup, ListGroupItem } from "reactstrap";
import ClaimsCenter from "../Claims/ClaimsCenter";

const SideNav = props => {
  return (
    <div className="mt-2">
      <Card>
        <ListGroup>
          <ListGroupItem tag="a" href="/" action>
            Home
          </ListGroupItem>
          <ListGroupItem tag="button" action>
            Profile
          </ListGroupItem>
          <ListGroupItem tag="a" href="/claims" action>
            Claims Center
          </ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
};
export default SideNav;
