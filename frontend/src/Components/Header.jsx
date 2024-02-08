import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";

import { FaServicestack } from "react-icons/fa6";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <Navbar.Brand>OPEITUM PATIENTS ADVOCACY</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" />
          <Nav className="ms-auto">
            <Nav.Link href="/cart">
              <FaShoppingCart />
              {""} Cart
            </Nav.Link>
            <Nav.Link href="/login">
              <FaUser />
              Login
            </Nav.Link>
            <Nav.Link href="/service">
              <FaServicestack />
              Service
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
