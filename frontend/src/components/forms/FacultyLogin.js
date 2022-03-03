import React from "react";
import { useState } from "react";

import { Container, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

import "./style.css"


const FacultyLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    const newEntry = [...allEntry, { email: email, password: password }];
  };

  return (
    <><div className="bg">
      <Container className="component">
        <h1>Faculty Login</h1> <span><a href="/facultyRegistration">Sign Up</a></span>
        <Form className="component" action="/facultyProfile" onSubmit={submitForm}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              value={email}
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              value={password}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      </div>
    </>
  );
};

export default FacultyLogin;
