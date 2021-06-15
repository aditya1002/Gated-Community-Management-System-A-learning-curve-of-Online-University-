import React,{useState} from 'react'
import HomeNav from './HomeNav';
import {Form,Card,Button} from 'react-bootstrap';
import Axios from "axios";
import Ttl from "./Title";

export default function Query() {
  //  const [email,changeemail] = useState('');
    const [textarea,changetextarea] = useState('');
    let user = JSON.parse(localStorage.getItem('details'))
      //let emailentered = email
      //console.warn(emailentered)
    const QuerySubmit = ()=>{
       
      Submit()
      
    }
    const Submit = () =>{
      var error
      Axios.post("http://localhost:3001/Query",{
          
          email: user[0].email,
          textarea: textarea,
          flatNo : user[0].flatNo,
          Community : user[0].Community,
          Block : user[0].Block
          
           }).then((response,err)=>{
              console.log(response);
              if(err){
              console.log(err.errno);
              }
          })
          if(error){
              alert("err")
          }
          else{
              alert("Query posted Successfully");
          }
          
          window.location.reload()
   
      }  
    

    return (
        <div>
        <Ttl />
        <HomeNav />
        <Card className="text-center" style={{width:'40rem',left:'20rem',top:'1rem'}}>
  <Card.Header>Have a Query!!!</Card.Header>
  <Card.Body>
    <Card.Title>Let Us Solve It...</Card.Title>
    <Card.Text>
    <Form>
  {/* <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" onInput={(e)=>{changeemail(e.target.value);}} />
  </Form.Group> */}
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Query</Form.Label>
    <Form.Control as="textarea" rows={3} onChange={(e)=>{changetextarea(e.target.value);}} />
  </Form.Group>
</Form>
    </Card.Text>
    <Button variant="primary" onClick={QuerySubmit}>Submit</Button>
  </Card.Body>
  
</Card>
            
        </div>
    )
}
