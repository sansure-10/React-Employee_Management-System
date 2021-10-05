import React from "react";
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"
import { Button ,Container,Navbar,Nav} from 'react-bootstrap';
class Header extends React.Component {
    
    render() {
        return (
            <>
            
            <div>



            <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"><Link to="/" style={{color:'white',textDecoration:'none'}}>HOME </Link></Navbar.Brand>
    <Nav className="me-auto">
      
      <Nav.Link href="#features"><Link to="/addemployee" style={{color:'white',textDecoration:'none'}}>Add Employee</Link></Nav.Link>
      <Nav.Link href="#home"><Link to="/viewemployee" style={{color:'white', textDecoration:'none'}}>Employee Details</Link></Nav.Link>
      <Nav.Link href="#pricing"><Link to="/addworking" style={{color:'white',textDecoration:'none'}}> Add Working Details</Link></Nav.Link>
      <Nav.Link href="#pricing"><Link to="/viewworking" style={{color:'white',textDecoration:'none'}}>Working Details</Link></Nav.Link>
     
      <Nav.Link href="#pricing"><Link to="/viewhistory" style={{color:'white',textDecoration:'none'}}> Working Details History</Link></Nav.Link>
      <Nav.Link href="#pricing"><Link to="/addsite" style={{color:'white',textDecoration:'none'}}> Add site </Link></Nav.Link>
      <Nav.Link href="#pricing"><Link to="/viewsite" style={{color:'white',textDecoration:'none'}}> Site Details </Link></Nav.Link>
      
    </Nav>
    </Container>
  </Navbar>
        
                  
                </div>
               
               
            </>
        )    
    }
}


export default Header