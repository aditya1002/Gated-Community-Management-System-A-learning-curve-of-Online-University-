import React, { useState } from 'react';
import Axios from 'axios';
import "./compoform.css";
//import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Adminnav from "./Adminnav";
//import Ttl from "./Title";
//import { Component } from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import Ttl from './Title';


export default function Component() {
    const [NewName, changeName] = useState('');
    const [subtitle, changesubtitle] = useState('');
    const [logo, changelogo] = useState('');
    const [componentdetails1, setcomponentdetails] = useState([]);

    const Signup = () => {
        let Componentdetail = JSON.parse(localStorage.getItem('Componentdetails'))

        var error
        Axios.put(`http://localhost:3001/Component/${Componentdetail[0].name}`, {
            NewName: NewName,
            subtitle: subtitle,
            logo: logo
        }).then((response, err) => {


            console.log(response);

            if (err) {
                console.log(err.errno);
            }
        })
        if (error) {
            alert("err")
        }
        else {
            alert("Title Changed Successfully\n Refresh to See!!!");

        }

    }
    Axios.get("http://localhost:3001/Componentdetails/all").then((response) => {
        setcomponentdetails(response.data);
        console.warn(response.data)
        localStorage.setItem('Componentdetails', JSON.stringify(response.data))
    });


    return (
        <div>
            <Ttl />
            <div style={{ backgroundColor: "#dcedc8", top: "20px" }}>

                <Container>
                    <Navbar bg="" expand="lg" style={{ top: '10px' }}>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/About">About</Nav.Link>
                                <Nav.Link href="/Contact">Contact Us</Nav.Link>
                                <Nav.Link href="/Form">Login</Nav.Link>
                                <Nav.Link href="/Component">Component Settings</Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>

                </Container>

            </div>


            <div className="compo">

                <Form className="compoform" style={{ top: '10px' }}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{ float: 'center' }}>Set Name</Form.Label>
                        <Form.Control type="text" onChange={(e) => { changeName(e.target.value); }} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{ float: 'left' }}>Subtitle</Form.Label>
                        <Form.Control type="text" onChange={(e) => { changesubtitle(e.target.value); }} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label style={{ float: 'left' }}>Logo</Form.Label>
                        <Form.File className="position-relative" onChange={(e) => { changelogo(e.target.value); }} />
                    </Form.Group>
                    <Button variant="outline-dark" onClick={Signup}>Submit</Button>

                </Form>

            </div>
        </div>
    );
}





