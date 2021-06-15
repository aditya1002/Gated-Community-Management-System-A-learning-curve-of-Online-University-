import React,{useState,optionsState} from 'react'
import Axios from 'axios';
//import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Adminnav from "./Adminnav";
import Ttl from "./Title";
//import { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
export default function Expenditure() {
    const [type,changetype] = useState('');
    const [amount,changeamount] = useState('');
    const [ name,changeeventname] = useState('');
    const [ date,changeeventdate] = useState('');
    const [ reason,changereason] = useState('');
   // const [maintenance,changemaintenance] = useState('');
      var error
     
    const Signup = () =>{
        
        //var error
        
        Axios.post("http://localhost:3001/Expenditure",{
           
            type : type,
            amount : amount,
            name : name,
            date: date,
            reason:reason
             }).then((response ,err)=>{
                 response=error
                if(response.data[1]){
                
               
                }
                console.warn(error);
            })
          
            if(error){
                alert("Invalid credentials")
            }
            else{
                alert("Computed");
            }
            window.location.reload();
        }

            
        
            console.warn(error);
         
    return (
        <div>
        <Adminnav />
       
             <Container fluid="md">
      <Row>
       <Col xs={3} md={3}>
       </Col>      
       <Col xs={6} md={4}>   
    <Card classname=""  style={{ backgroundColor: 'mediumturquoise', top:'20px' , justify:'center',width: '30rem',height:'15rem',borderRadius:'20px',boxShadow:'0px 1px 10px 1px'}}>
        <Card.Body>
         
                             <Form style={{top:'10px'}}>
                                   
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                         <Form.Label>Type</Form.Label>
                                            <Form.Control size="sm" as="select" onChange={(e)=>{changetype(e.target.value);}}>
                                                <option>Select</option>
                                                <option>Maintenance</option>
                                                <option>Events</option>
                                                <option>Miscellaneous</option>
                                            </Form.Control>
                                        </Form.Group>
                                        { type === 'Maintenance' && <div> 
                                        <Form.Group controlId="formBasicPassword">
                                               <Form.Label style={{float:'left'}}>Purpose</Form.Label>
                                                    <Form.Control type="text" onChange={(e)=>{changereason(e.target.value);}}/>
                                    </Form.Group>
                                         <Form.Group controlId="formBasicPassword">
                                               <Form.Label style={{float:'left'}}>Amount</Form.Label>
                                                    <Form.Control type="text" onChange={(e)=>{changeamount(e.target.value);}}/>
                                    </Form.Group></div>  }

                                        
                                    { type === 'Events' && <div>  <Form.Group controlId="formBasicPassword">
                                               <Form.Label style={{float:'left'}}>Name</Form.Label>
                                                    <Form.Control type="text" onChange={(e)=>{changeeventname(e.target.value);}}/>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                               <Form.Label style={{float:'left'}}>Amount</Form.Label>
                                                    <Form.Control type="text" onChange={(e)=>{changeamount(e.target.value);}}/>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                               <Form.Label style={{float:'left'}}>Date</Form.Label>
                                                    <Form.Control type="text" onChange={(e)=>{changeeventdate(e.target.value);}}/>
                                    </Form.Group>
                                    </div> }
                                    { type === 'Miscellaneous' && <div>  <Form.Group controlId="formBasicPassword">
                                               <Form.Label style={{float:'left'}}>Amount</Form.Label>
                                                    <Form.Control type="text" onChange={(e)=>{changeamount(e.target.value);}}/>
                                    </Form.Group></div> }
    
    
    
                                  <Container>
                                      <Row xs={2} md={4} lg={6}>
                                         <Col>
                                         <Button variant="outline-danger" onClick={Signup} >Submit</Button>
                                          </Col>
                                          <Col>
                                          
                                         </Col>
                                     </Row>
                                  </Container>

                               </Form> 

                      </Card.Body>
         
                 </Card>
             </Col>  
          <Col xs={3} md={3}>

        </Col> 
    </Row>
</Container> 
        </div>
    )
}
