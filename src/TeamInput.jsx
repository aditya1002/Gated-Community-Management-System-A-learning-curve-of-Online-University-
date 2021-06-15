import React,{useState} from 'react';
import {Form,Button} from "react-bootstrap";
import Adminnav from "./Adminnav";
import Axios from 'axios';
export default function TeamInput() {
    const [fullName, changefullName] = useState('');
    const [flatNo, changeflatNo] = useState('');
    const [email, changeemail] = useState('');
    const [phone, changephone] = useState('');
    const [des, changedes] = useState('');
    
    const Signup =()=>{
        Axios.post("http://localhost:3001/Signup/Team", {
            fullName: fullName,
            flatNo: flatNo,
            email: email,
            phone : phone,
            des : des

        }).then((response, err) => {
            console.log(response);
           
            if (err) {
                console.log(err.errno);
            }
        })
        
            alert("Signed up Successfully");
           window.location.reload()

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
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{ float: 'left' }}>Email</Form.Label>
                        <Form.Control type="email" onChange={(e) => { changeemail(e.target.value); }} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{ float: 'left' }}>Designation</Form.Label>
                        <Form.Control type="email" onChange={(e) => { changedes(e.target.value); }} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{ float: 'left' }}>Phone No</Form.Label>
                        <Form.Control type="email" onChange={(e) => { changephone(e.target.value); }} />
                    </Form.Group>
                   
                    <Button variant="outline-info" onClick={Signup}>Submit</Button>

                </Form>
            </div>


        </div>
    )
}
