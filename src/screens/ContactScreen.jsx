import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

function ContactScreen() {
  return (
    <Row>
      <Col xs={12} md={10} className="mx-auto mb-5">
        <Card className="p-4 shadow-sm">
          <Card.Body>
            <Card.Title className="mb-3"><div className="contact-title">Get in Touch</div></Card.Title>
            <p>
              I’m always happy to talk shop, collaborate on a project, or answer
              any questions you may have.
            </p>
            <p>
              Whether you’re interested in working together or just want to say
              hey — feel free to reach out using any method below.
            </p>
            <h4 className="bioheader contact-info">Contact Info</h4>
        <ul className="list-unstyled bio contact-info">
          <li className="mb-3 d-flex align-items-center">
            <i className="fab fa-discord me-2 text-indigo-600"></i>
            <div>
            <strong>Discord: freedom_coding_70048</strong>&nbsp;
            </div>
          </li>
          <li className="mb-3 d-flex align-items-center">
            <i className="fas fa-phone me-2 text-success"></i>
            <div>
            <strong>Phone:</strong>&nbsp;(306) 441-6151
            </div>
          </li>
          <li className="mb-3 d-flex align-items-center">
            <i className="fas fa-envelope me-2 text-danger"></i>
            <div>
            <strong>Email:</strong>&nbsp;
            </div>
            <a href="mailto:support@wallstreetstackers.com">support@wallstreetstackers.com</a>
          </li>
        </ul>

        <h4 className="bioheader location-hours">Location & Hours</h4>
        <p className="bio">
          🌍 Based in Alberta, Canada  
          <br />
          🕒 Available 10am–6pm CST, Mon–Fri
        </p>

        <h4 className="bioheader other-platforms">Other Platforms</h4>
        <p className="bio">
          You can also find me on:
        </p>
        <div className="d-flex gap-3 justify-content-center socials">
          <a href="https://github.com/Freedomcoding101" target="_blank" rel="noreferrer">
            <i className="fab fa-github fa-2x text-dark"></i>
          </a>
          <a href="https://www.linkedin.com/in/owen-dillabough-0178a22ba/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin fa-2x text-primary"></i>
          </a>
        </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default ContactScreen;
