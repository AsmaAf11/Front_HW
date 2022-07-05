import React from "react";
import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
function Header() {
  return (
    <div>

<Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1" as={NavLink} to="/Cards" >Cards</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2" as={NavLink} to="/About" >About</Nav.Link>
      </Nav.Item>
    </Nav>

      {/* <Link to="/Cards">Cards</Link>

      <Link to="/About">About</Link> */}

    </div>
  );
}

export default Header;
