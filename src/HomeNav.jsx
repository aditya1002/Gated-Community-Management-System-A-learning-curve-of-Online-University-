import React from "react";
import "./homenav.css";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";

function HomeNav(){
  const navst = {
    color: "black",
  };
  let user = JSON.parse(localStorage.getItem('details'))
   console.warn(user)
    return (
        <>
        

  <div className="home">      
<Navbar className="homenav" bg="" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link style={navst} href="/Home">Home</Nav.Link>
      <NavDropdown title="Association Details" id="basic-nav-dropdown">
        <NavDropdown.Item style={navst} href="/Flatdetails">Flat Details</NavDropdown.Item>
        <NavDropdown.Item style={navst} href="/Team">Team TapoVan</NavDropdown.Item>
        <NavDropdown.Divider />
        </NavDropdown>
        {/* <NavDropdown title="Accounts" id="basic-nav-dropdown">
        <NavDropdown.Item href="">Monthly</NavDropdown.Item>
        <NavDropdown.Item href="">Yearly</NavDropdown.Item>
        <NavDropdown.Divider />
        </NavDropdown> */}
        <Nav.Link href="/Photos">Gallery</Nav.Link>
        
      <NavDropdown style={navst} title="Queries" id="basic-nav-dropdown">
        <NavDropdown.Item style={navst} href="/Query">Raise Query</NavDropdown.Item>
        <NavDropdown.Item style={navst} href="/Userquery">My Queries</NavDropdown.Item>
        <NavDropdown.Divider />        
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl  type="text" placeholder="Search" className="mr-sm-4" />
      <Button variant="outline-success"style={{borderRadius:'10px',color:'black',bottom:'20px' }}>Search</Button>
    </Form>
    <NavDropdown title= {user[0].fullName} id="basic-nav-dropdown">
    <NavDropdown.Item style={navst} href="/Userprofile">Profile</NavDropdown.Item> 
        <NavDropdown.Item style={navst} href="/">Signout</NavDropdown.Item>
        <NavDropdown.Divider />        
      </NavDropdown>
  </Navbar.Collapse>
</Navbar>

</div>
</>
);
};
export default HomeNav;