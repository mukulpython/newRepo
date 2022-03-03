import React from "react";
import { useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import SPHeader from "./pheader/SPHeader.js";

const StudentProfile = () => {
  return (
    <div className="bg">
      <Container st className="component">
        <SPHeader/>
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
      </Container>
    </div>
  );
};
export default StudentProfile;
