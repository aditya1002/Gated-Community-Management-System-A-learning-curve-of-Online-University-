import React from 'react';
import Ttl from "./Title";
import { Row,Col, Jumbotron,Navbar,NavDropdown,Nav,FormControl,Button,Form,Image,Container,Card } from 'react-bootstrap';
export default function Contact() {
    return (
        <div>
            <Ttl />
 <div style={{backgroundColor :"#dcedc8", top : "20px"}}>


<Container>      
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

</Container>

</div>
<Container>
  <Row>
       <Col xs={6} md={4}>
       </Col>      
       <Col xs={6} md={4}>  
 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.aparnaconstructions.com/wp-content/uploads/2018/05/Gated-Communities.jpg" />
  <Card.Body>
    <Card.Title>Contact Us At</Card.Title>
    <Card.Text>
      Tapovan@gmail.com
      Or
      Reach On 1877889900
    </Card.Text>
    
  </Card.Body>
</Card>
 </Col>  
          <Col xs={6} md={4}>

        </Col> 
    </Row>
    <Row>

    </Row>
  </Container>
        </div>
    )
}

