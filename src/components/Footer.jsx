// rfce to make this import below!

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Email: <a href="mailto:team@trackstacker.com">{"team@trackstacker.com"}</a>
            <br></br>
            Copyright &copy; Owen Dillabough
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
