import React from "react";
import { useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import FPHeader from "./pheader/FPHeader.js";

const FacultyProfile = () => {
  return (
    <div className="bg">
      <Container st className="component">
        <FPHeader/>
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
      </Container>
    </div>
  );
};
export default FacultyProfile;
