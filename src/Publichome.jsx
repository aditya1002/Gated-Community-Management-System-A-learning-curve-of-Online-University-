import React from "react";
import Cards from "./Card";
import "./publichome.css";
import Container from 'react-bootstrap/Container'
import { Row, Col, Jumbotron, Navbar, NavDropdown, Nav, FormControl, Button, Form, Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import HomeNav from "./HomeNav";
import Ttl from "./Title";




export default function PublicHome() {
  const navst = {
    color: "black",
  };

  return (
    <>
      <Ttl />



      <div className="navcontainer">
        <Navbar bg="" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto navbar">
              <Nav.Link style={navst} href="/">Home</Nav.Link>
              <Nav.Link style={navst} href="/About">About</Nav.Link>
              <Nav.Link style={navst} href="/Contact">Contact Us</Nav.Link>
              <Nav.Link style={navst} href="/Form">Login</Nav.Link>
              
            </Nav>

          </Navbar.Collapse>
        </Navbar>

      </div>


      <Card className=" bg-dark text-white">
        <Card.Img src="https://mldllifespacebucket01.s3.amazonaws.com/2020/07/Benefits_of_living_in_a_gated_community_-_MWC_Chennai.jpg" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title></Card.Title>
          <Card.Text>

          </Card.Text>
          <Card.Text></Card.Text>
        </Card.ImgOverlay>
      </Card>
    </>

  );
}

