import React from "react";

import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";

function NavBar(){
  const navst = {
    color: "black",
  };
    return (
        <div style={{backgroundColor :"orange", top : "20px"}}>
        
 
  <Container>      
<Navbar  bg="" expand="lg" style={{top: '10px'}}>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link style={navst} href="/">Home</Nav.Link>
      <NavDropdown title="Register" id="basic-nav-dropdown">
        <NavDropdown.Item style={navst} href="/Signup">New User</NavDropdown.Item>
        <NavDropdown.Item style={navst} href="/Form">Existing User Login</NavDropdown.Item>
        <NavDropdown.Divider />
        </NavDropdown>
    
      <NavDropdown title="Queries" id="basic-nav-dropdown">
        <NavDropdown.Item style={navst} href="">New Query</NavDropdown.Item>
        <NavDropdown.Item style={navst} href="">Query Status</NavDropdown.Item>
        <NavDropdown.Divider />        
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl  type="text" placeholder="Search" className="mr-sm-4" />
      <Button variant="outline-success"style={{borderRadius:'10px',color:'black',bottom:'20px' }}>Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

</Container>
</div>
);
};
export default NavBar;