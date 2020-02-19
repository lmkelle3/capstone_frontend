import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from "reactstrap";

const TopNav = props => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Oopsie Insurance Co</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/claims">Claims</NavLink>
          </NavItem>
        </Nav>
        <NavbarText>Welcome, John Doe</NavbarText>
        <NavLink href="/profile/"> Go To Profile</NavLink>
      </Navbar>
    </div>
  );
};

export default TopNav;
