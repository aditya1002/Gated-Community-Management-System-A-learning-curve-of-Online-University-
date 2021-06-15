import React, { Component, useState } from 'react';
import Axios from 'axios';
import "./form.css";
import { Redirect, Route, Switch } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Grid from '@material-ui/core/Grid';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import Ttl from "./Title";
import Box from '@material-ui/core/Box';

function Forms() {
    const [username, changeusername] = useState("");
    const [password, changepassword] = useState("");

    const [loginstatus, changeloginstatus] = useState("");


    const Login = () => {
        Axios.post("http://localhost:3001/Form", {
            username: username,
            password: password
        }).then((res) => {
            const loginauth = () => {
                if (res.data[0].username === "admin" && res.data[0].password === "admin") {
                    changeloginstatus(<Redirect to='/Adminhome' />)
                } else if (res.data === "Invalid") {
                    changeloginstatus(Invalid())
                } else {
                    changeloginstatus(<Redirect to='/Home' />, localStorage.setItem('details', JSON.stringify(res.data)))
                }

            }
            const Invalid = () => {
                alert("Invalid Credentials \n Please Enter Correct Details");
            }
            console.log(res);
            changeloginstatus(loginauth())





        })
    }
    return (
        <div>
            <Ttl />

            <Jumbotron className="Login" style={{ backgroundImage: 'url(https://etimg.etb2bimg.com/photo/77239543.cms)', borderRadius: '1px 1px 0px 1px' }} >

               
                   
                        <Form className="login-form">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label >Username</Form.Label>
                                <Form.Control placeholder="Enter E-mail" type="email" onChange={(e) => { changeusername(e.target.value); }} />

                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label >Password</Form.Label>
                                <Form.Control placeholder="Enter Password" type="password" onChange={(e) => { changepassword(e.target.value); }} />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>



                            <Button block
                                size="lg"
                                type="submit" onClick={Login}>Submit
                                                 </Button>
                            <h1>{loginstatus}</h1>


                        </Form>
                   

            </Jumbotron>
        </div>
    )
}

export default Forms;