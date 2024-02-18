import React from "react";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaServicestack } from "react-icons/fa6";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";
const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>OPEITUM PATIENTS ADVOCACY</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" />
          <Nav className="ms-auto">
            <LinkContainer to="/profile">
              <Nav.Link>
                <CgProfile />
                Profile
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link>
                <FaShoppingCart />
                {""} Cart
                {cartItems.length > 0 && (
                  <Badge
                    pill
                    bg="success"
                    style={{
                      marginLeft: "5px",
                    }}
                  >
                    {cartItems.reduce((a, c) => a + c.qty, 0)}
                  </Badge>
                )}
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>
                <FaUser />
                Login
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/service">
              <Nav.Link>
                <FaServicestack />
                Service
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
