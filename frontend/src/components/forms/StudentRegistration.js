import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";

const StudentRegistration = () => {
  return (
    <div className="bg">
      <Container className="component">
        <form>
          <h3>Sign Up</h3>
          <div className="form-group">
            <label>User Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="User Name"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="password"
            />
          </div>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group">
            <label>Phone no.</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Phone no."
            />
          </div>
          <div className="form-group">
            <label>Branch</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter  Branch"
            />
          </div>
          <div className="form-group">
            <label>Year</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter year"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered <a href="#">sign in?</a>
          </p>
        </form>
      </Container>
    </div>
  );
};

export default StudentRegistration;
