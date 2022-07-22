import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <Container className="mt-5">
      <h2>SignUp</h2>
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
          Do you have already an account, You can{" "}
          <Link to="/login">Sign In</Link>
        </p>
      </Form>
    </Container>
  );
}

export default SignUp;
