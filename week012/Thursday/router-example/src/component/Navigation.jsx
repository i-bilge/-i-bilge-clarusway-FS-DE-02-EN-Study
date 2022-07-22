import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
          <Navbar.Brand>Router Example</Navbar.Brand>
        <Nav defaultActiveKey="/" as="ul">
          <Nav.Item as="li">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/posts" className="nav-link">
              Posts
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/signup" className="nav-link">
              Sign Up
            </Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
