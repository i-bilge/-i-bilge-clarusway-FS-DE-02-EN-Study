import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function Login() {
  const location = useLocation();
  console.log("loaction", location);
  return (
    <Container className="mt-5">
      <h2>{location.state.admin ? "Admin " : "User "}Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <p>
          Don't you have already an account, You can{" "}
          <Link to="/signup">Sign Up</Link>
        </p>
      </Form>
    </Container>
  );
}

export default Login;
