import React from "react";
import {Navbar}  from 'react-bootstrap' 
import { Container}  from 'react-bootstrap'
import { Nav}  from 'react-bootstrap'
import StudentLogin from "../forms/StudentLogin";
export const Header = () => {



  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Student Login</Nav.Link>
            <Nav.Link href="/facultyLogin">Faculty Login</Nav.Link>
            <Nav.Link href="/">Admin Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );  
};

export default Header;
