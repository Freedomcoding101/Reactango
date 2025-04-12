// rfce to make this import below!

import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" className="profile-name">
            Owen Dillabough
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/projects">
                <i className="fas fa-diagram-project"></i> Projects
              </Nav.Link>

              <Nav.Link as={Link} to="/resume">
                <i className="fas fa-file"></i><a href="https://profilebucket444334.s3.us-east-2.amazonaws.com/resume.pdf" download> Resume</a>
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="https://github.com/Freedomcoding101"
                target="_blank"
              >
                <i className="fa-brands fa-github"></i> Github
              </Nav.Link>

              <Nav.Link as={Link} to="/contact">
                <i className="fas fa-envelope"></i> Contact
              </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
