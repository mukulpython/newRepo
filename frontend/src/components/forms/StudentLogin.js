import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Button, Container } from "react-bootstrap";
import "./style.css"

const StudentLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    const newEntry = setAllEntry([
      ...allEntry,
      { email: email, password: password },
    ]);
  };

  return (
    <div className="bg">
    <Container st className="component">
      <h1>Student Login</h1><span><a href="/studentRegistration">Sign Up</a></span>
      <Form action="/studentProfile" onSubmit={submitForm}>
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
      <div>{email}</div>
    </Container>
    </div>
  );
};

export default StudentLogin;
