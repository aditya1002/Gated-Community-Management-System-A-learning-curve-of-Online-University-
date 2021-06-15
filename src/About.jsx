import React from 'react';
import { Row,Col, Jumbotron,Navbar,NavDropdown,Nav,FormControl,Button,Form,Image,Container,Card } from 'react-bootstrap';
import Ttl from "./Title";
export default function About() {
    return (
        <div>
            
 <Ttl />
 <div style={{backgroundColor :"#dcedc8", top : "20px"}}>


<div className="navcontainer">      
<Navbar  bg="" expand="lg" style={{top: '10px'}}>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto">
    <Nav.Link href="/">Home</Nav.Link>
    <Nav.Link href="/About">About</Nav.Link>
    <Nav.Link href="/Contact">Contact Us</Nav.Link>
    <Nav.Link href="/Form">Login</Nav.Link>

  </Nav>

</Navbar.Collapse>
</Navbar>

</div>

</div>
  <Card >
  <Card.Title style={{textTransform:"uppercase",textAlign:"center",fontWeight:"700"}}>About Us</Card.Title>
    <Card.Body>
      <Card.Text style={{fontStyle:"italic"}}>
      In its modern form, a gated community (or walled community) is a form of residential community or housing estate containing strictly controlled entrances for pedestrians, bicycles, and automobiles, and often characterized by a closed perimeter of walls and fences. Similar walls and gates have separated quarters of some cities for centuries. Gated communities usually consist of small residential streets and include various shared amenities. For smaller communities, these amenities may include only a park or other common area. For larger communities, it may be possible for residents to stay within the community for most daily activities. Gated communities are a type of common interest development, but are distinct from intentional communities.

Given that gated communities are spatially a type of enclave, Setha M. Low, an anthropologist, has argued that they have a negative effect on the net social capital of the broader community outside the gated community. Some gated communities, usually called guard-gated communities, are staffed by private security guards and are often home to high-value properties, and/or are set up as retirement villages. Some gated communities are secure enough to resemble fortresses and are intended as such.
      </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iY48m_L8eQrQ/v0/1200x797.jpg"  />
  </Card>

  
        </div>
    )
}




