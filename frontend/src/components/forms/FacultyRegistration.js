import React from 'react'
import { Container } from 'react-bootstrap'
import "./style.css"

const FacultyRegistration = () => {
  return (
    <div className="bg">
    <Container className='component'>
    
            <form >
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>User name</label>
                    <input type="text" className="form-control" placeholder="User name" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter Name" />
                </div>
                <div className="form-group">
                    <label>Phone no. </label>
                    <input type="number" className="form-control" placeholder="Phone no. " />
                </div>
                <div className="form-group">
                    <label>Subject </label>
                    <input type="text" className="form-control" placeholder="subject " />
                </div>
                <div className="form-group">
                    <label>Branch</label>
                    <input type="text" className="form-control" placeholder="Branch" />
                </div>
                
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        
    

    </Container>
    </div>
  )
}
export default FacultyRegistration


