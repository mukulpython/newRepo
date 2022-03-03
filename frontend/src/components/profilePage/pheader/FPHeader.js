import React from 'react'
import {Navbar}  from 'react-bootstrap' 
import { Container}  from 'react-bootstrap'
import { Nav}  from 'react-bootstrap'

const FPHeader = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Edit Profile</Nav.Link>
            <Nav.Link href="/">Study Material</Nav.Link>
            <Nav.Link href="/">Video Lectures </Nav.Link>
            <Nav.Link href="/">Doubts</Nav.Link>
            <Nav.Link href="/">Answers</Nav.Link>
            <Nav.Link href="/">Log out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default FPHeader;