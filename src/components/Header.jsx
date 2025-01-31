// rfce to make this import below!

import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Owen Dillabough</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                <i className="fas fa-diagram-project"></i> Projects
              </Nav.Link>

              <Nav.Link as={Link} to="/bio">
                <i className="fas fa-user"></i> Bio
              </Nav.Link>

              <Nav.Link as={Link} to="/resume">
                <i className="fas fa-file"></i> Resume
              </Nav.Link>

              <Nav.Link as={Link} to="/github">
                <i className="fa-brands fa-github"></i> Github
              </Nav.Link>

              <Nav.Link as={Link} to="/contact">
                <i className="fas fa-envelope"></i> Contact
              </Nav.Link>

              <Nav.Link as={Link} to="/login">
                <i className="fas fa-user"></i> Login
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                <i className="fas fa-shopping-cart"></i> Cart
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
