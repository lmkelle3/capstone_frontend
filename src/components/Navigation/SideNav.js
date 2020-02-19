import React from "react";
import { Card, ListGroup, ListGroupItem } from "reactstrap";

const SideNav = props => {
  return (
    <div>
      <Card>
        <ListGroup>
          <ListGroupItem active tag="button" action>
            Cras justo odio
          </ListGroupItem>
          <ListGroupItem tag="button" action>
            Dapibus ac facilisis in
          </ListGroupItem>
          <ListGroupItem tag="button" action>
            Morbi leo risus
          </ListGroupItem>
          <ListGroupItem tag="button" action>
            Porta ac consectetur ac
          </ListGroupItem>
          <ListGroupItem disabled tag="button" action>
            Vestibulum at eros
          </ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
};

export default SideNav;
