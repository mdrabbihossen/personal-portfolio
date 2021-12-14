import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import uniCoach from "../../../images/uniCoach-desktop.png";
import medicaHealth from "../../../images/medica-desktop.png";
import hondaCrb from "../../../images/hondaCRB-desktop.png";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-title">Projects</div>
      <div className="bar"></div>
      <div className="container ">
        <Row xs={1} md={3} className="g-4 ">
          <Col>
            <Card className="projects-card">
              <Card.Img variant="top" src={uniCoach} />
              <Card.Body>
                <Card.Title className="project-title">Uni-Coach</Card.Title>
                <Card.Text className="project-desc">
                  A web application that allows students to connect with their
                  peers and teachers.
                </Card.Text>
                <Card.Footer className="project-footer">
                  React JS,React Router,React Hook Form,Firebase
                  Auth,Bootstrap,Express
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="projects-card">
              <Card.Img variant="top" src={medicaHealth} />
              <Card.Body>
                <Card.Title className="project-title">Medica Health</Card.Title>
                <Card.Text className="project-desc">
                  A web application that allows patients to track their health
                  and medical records.
                </Card.Text>
                <Card.Footer className="project-footer">
                  React JS,React Router,React Hook Form,Firebase
                  Auth,Bootstrap,Express
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="projects-card">
              <Card.Img variant="top" src={hondaCrb} />
              <Card.Body>
                <Card.Title className="project-title">Honda CBR</Card.Title>
                <Card.Text className="project-desc">
                  A web application that allows users to view and book CBR
                  services.
                </Card.Text>
                <Card.Footer className="project-footer">
                  HTML , CSS, Bootstrap
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Projects;
