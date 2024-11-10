import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand as="span">Registry</Navbar.Brand>
        </Link>
        <Nav className="mr-auto">
          <Link to="/">
            <Nav.Link as="span">Home</Nav.Link>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  </header>
);

export default Header;
