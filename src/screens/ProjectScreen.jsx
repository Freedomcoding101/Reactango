import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Container } from "react-bootstrap";
import TechPill from "../components/TechPill";
import axios from "axios";
import { baseURL } from "../config";

function ProjectScreen() {
  const { id } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    async function fetchProject() {
      try {
        const { data } = await axios.get(`${baseURL}/projects/${id}`);
        console.log(data); // Log the response data
        setProject(data);
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    }
    fetchProject();
  }, []);

  return (
    <>
      {/* Back Button Section */}
      <div className="d-flex justify-content-start px-3 mb-4">
        <motion.div whileHover={{ scale: 1.05, x: -5 }}>
          <Link to="/projects" className="btn btn-light">
            Go Back
          </Link>
        </motion.div>
      </div>
  
      {/* Main Content Container */}
      <Container className="d-flex justify-content-center">
        <div style={{ width: "80vw" }}>
          <Row className="g-5">
            <Col md={6}>
              <Image
                src={`${baseURL}${project.image}`}
                alt={project.title}
                fluid
              />
            </Col>
            <Col md={6}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{project.title}</h3>
                </ListGroup.Item>
  
                <p>{project.description}</p>
  
                <ListGroup.Item>
                  <strong>Technologies:</strong>
                  <div className="d-flex flex-wrap mt-2">
                    {project.technologies &&
                      project.technologies
                        .split(",")
                        .map((tech, index) => (
                          <TechPill key={index} label={tech.trim()} />
                        ))}
                  </div>
                </ListGroup.Item>
  
                <ListGroup.Item>
                  <div>{project.name}</div>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default ProjectScreen;
