import React, { useState, optionsState } from 'react'
import Axios from 'axios';
import "./income.css"
//import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Adminnav from "./Adminnav";
import Ttl from "./Title";
//import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
export default function Income() {
    const [flatNo, changeflatNo] = useState('');
    const [floor, changefloor] = useState('');
    const [area, changearea] = useState('');
    const [extras1, changeextras1] = useState('');
    const [Community, changeCommunity] = useState('');
    const [Block, changeBlock] = useState('');
    const [extras2, changeextras2] = useState('');
    const [type, changetype] = useState('');
    const [amount, changeamount] = useState('');
    // const [maintenance,changemaintenance] = useState('');
    var error

    const Signup = () => {

        //var error
      if(type==="maintenance"){
          
      }
        Axios.post("http://localhost:3001/Income", {

            flatNo: flatNo,
            floor: floor,
            Community: Community,
            Block: Block,
            type: type,
            area: area,
            extras1: extras1,
            extras2: extras2,
            amount: amount
        }).then((response, err) => {
            response = error
            if (response.data[1]) {


            }
            console.warn(error);
        })

        if (error) {
            alert("Invalid credentials")
        }
        else {
            alert("Computed");
            window.location.reload();
        }
        
    }



    console.warn(error);

    return (
        <div>
            <Adminnav />


            <div className="income">
                <Form className="incomeform" style={{ top: '10px' }}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{ float: 'center' }}>FLat No</Form.Label>
                        <Form.Control type="text" onChange={(e) => { changeflatNo(e.target.value); }} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{ float: 'left' }}>Floor </Form.Label>
                        <Form.Control type="text" onChange={(e) => { changefloor(e.target.value); }} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Community</Form.Label>
                        <Form.Control size="sm" as="select" onChange={(e) => { changeCommunity(e.target.value); }}>
                            <option>Select</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Block</Form.Label>
                        <Form.Control size="sm" as="select" onChange={(e) => { changeBlock(e.target.value); }}>
                            <option>Select</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </Form.Control>
                    </Form.Group>


                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Type</Form.Label>
                        <Form.Control size="sm" as="select" onChange={(e) => { changetype(e.target.value); }}>
                            <option>Select</option>
                            <option>Maintenance</option>
                            <option>Corpus</option>
                            <option>Security</option>
                            <option>Event Collection</option>
                        </Form.Control>
                    </Form.Group>
                    {type === 'Maintenance' && <div>  <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{ float: 'left' }}>Area (sqft)</Form.Label>
                        <Form.Control type="text" onChange={(e) => { changearea(e.target.value); }} />
                    </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Extra Amenities</Form.Label>
                            <Form.Control size="sm" as="select" onChange={(e) => { changeextras1(e.target.value); }}>

                                <option value="0">Select</option>
                                <option value="10">Gym</option>
                                <option value="20">Swimming Pool</option>
                                <option value="30">Toddler Park</option>


                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Extra Amenities 2</Form.Label>
                            <Form.Control size="sm" as="select" onChange={(e) => { changeextras2(e.target.value); }}>

                                <option value="0">Select</option>
                                <option value="40">Community Hall</option>
                                <option value="50">Play Area</option>
                                <option value="60">Park</option>


                            </Form.Control>
                        </Form.Group>
                    </div>}

                    {type === 'Corpus' && <div>  <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{ float: 'left' }}>Amount</Form.Label>
                        <Form.Control type="text" onChange={(e) => { changeamount(e.target.value); }} />
                    </Form.Group></div>}
                    {type === 'Security' && <div>  <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{ float: 'left' }}>Amount</Form.Label>
                        <Form.Control type="text" onChange={(e) => { changeamount(e.target.value); }} />
                    </Form.Group></div>}
                    {type === 'Event Collection' && <div>  <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{ float: 'left' }}>Amount</Form.Label>
                        <Form.Control type="text" onChange={(e) => { changeamount(e.target.value); }} />
                    </Form.Group></div>}



                    <Button variant="dark" onClick={Signup} >Submit</Button>


                </Form>
            </div>
        </div>
    )
}
