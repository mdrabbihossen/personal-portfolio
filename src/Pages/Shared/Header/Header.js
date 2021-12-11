import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Header.css";
const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top">
      <Container>
        <div className="header-title">
          <p>
            Rabby Hossen <br /> Frontend Developer
          </p>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="">
          <Nav className="ms-auto">
            <Nav.Link id="#home" className="text-white fw-bolder" as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link className="text-white fw-bolder" as={Link} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link className="text-white fw-bolder" as={Link} to="/blogs">
              Blogs
            </Nav.Link>
            <Nav.Link className="text-white fw-bolder" as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link className="text-white fw-bolder" as={Link} to="/contact">
              Contact
            </Nav.Link>
            <a
              href="https://drive.google.com/file/d/1OeTuIXa20elDcsGYLnqW_j20HqDRtE2X/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <button className="resume-btn fw-bolder">Resume</button>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
