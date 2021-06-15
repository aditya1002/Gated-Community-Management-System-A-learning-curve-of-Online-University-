import React, { useState } from 'react';
import Axios from 'axios';
import "./signup.css";
//import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Adminnav from "./Adminnav";
//import Ttl from "./Title";
//import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Toast } from 'bootstrap';
function Signsup() {
    const [fullName, changefullName] = useState('');
    const [flatNo, changeflatNo] = useState('');
    const [email, changeemail] = useState('');
    const [username, changeusername] = useState('');
    const [password, changepassword] = useState('');
    const [Community, changeCommunity] = useState('');
    const [Block, changeBlock] = useState('');
    const [error,seterror] = useState('');
    const Signup = () => {

        var error
        Axios.post("http://localhost:3001/Signup", {
            fullName: fullName,
            flatNo: flatNo,
            Community: Community,
            Block: Block,
            email: email,
            username: username,
            password: password
        }).then((response, err) => {
            console.log(response);
            seterror(response.data.message);
            if (err) {
                console.log(err.errno);
            }
        })
        if (error) {
            alert(error);
        }
        else {
            alert("Signed up Successfully");
           window.location.reload()

        }
        if(error){
            alert(error);
        }


    }
    return (
        <div>

            <Adminnav />
            <div className="signup">
                <Form className="signup-form" style={{ top: '10px' }}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{ float: 'center' }}>Full Name</Form.Label>
                        <Form.Control type="text" onChange={(e) => { changefullName(e.target.value); }} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{ float: 'left' }}>Flat No</Form.Label>
                        <Form.Control type="text" onChange={(e) => { changeflatNo(e.target.value); }} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Community</Form.Label>
                        <Form.Control size="sm" as="select" onChange={(e) => { changeCommunity(e.target.value); }}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Block</Form.Label>
                        <Form.Control size="sm" as="select" onChange={(e) => { changeBlock(e.target.value); }}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{ float: 'left' }}>Email</Form.Label>
                        <Form.Control type="email" onChange={(e) => { changeemail(e.target.value); }} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{ float: 'left' }}>UserName</Form.Label>
                        <Form.Control type="text" onChange={(e) => { changeusername(e.target.value); }} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{ float: 'left' }}>Password</Form.Label>
                        <Form.Control type="text" onChange={(e) => { changepassword(e.target.value); }} />
                    </Form.Group>


                    <Button variant="outline-info" onClick={Signup}>Submit</Button>

                </Form>
            </div>


        </div>
    );
}


export default Signsup;