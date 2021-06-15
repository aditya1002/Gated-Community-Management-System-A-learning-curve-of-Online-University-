import React,{useState} from 'react';
import Axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Adminnav from "./Adminnav";
import {Container,Col,Row} from "react-bootstrap";


export default function Corpus() {
    const [flatNo,changeflatNo] = useState('');
    const [floor,changefloor] = useState('');
    const [amount,changeamount] = useState('');
    
    const [Community,changeCommunity]= useState('');
    const [Block,changeBlock] = useState('');
    
   // const [maintenance,changemaintenance] = useState('');
      var error
     
    const Corpus = () =>{
        //var error
        
        Axios.post("http://localhost:3001/Corpus",{
           
            flatNo: flatNo,
            floor : floor,
            Community: Community,
            Block : Block,
            amount: amount,
            
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
                alert("Corpus Inserted");
            }
        }

            
           
           
        
        
      
  
    return (
        <div>
              <Adminnav />
       
       <Container fluid="md">
<Row>
 <Col xs={3} md={3}>
 </Col>      
 <Col xs={6} md={4}>   
<Card classname=""  style={{ backgroundColor: 'burlywood', top:'20px' , justify:'center',width: '30rem',height:'35rem',borderRadius:'20px',boxShadow:'0px 1px 10px 1px'}}>
  <Card.Body>
   
                       <Form style={{top:'10px'}}>
                       <Form.Label style={{float:'center',font:'200px'}}><h1><u>Corpus Fund</u></h1> </Form.Label><br/>
                             <Form.Group controlId="formBasicEmail">
                             
                                  <Form.Label style={{float:'center'}}>FLat No</Form.Label>
                                      <Form.Control type="text"  onChange={(e)=>{changeflatNo(e.target.value);}} />
                              </Form.Group>

                             <Form.Group controlId="formBasicPassword">
                                      <Form.Label style={{float:'left'}}>Floor </Form.Label>
                                        <Form.Control type="text"  onChange={(e)=>{changefloor(e.target.value);}}/>
                              </Form.Group> 
                              <Form.Group controlId="exampleForm.ControlSelect1">
                                   <Form.Label>Community</Form.Label>
                                      <Form.Control size="sm" as="select" onChange={(e)=>{changeCommunity(e.target.value);}}>
                                          <option>Select</option>
                                          <option>1</option>
                                          <option>2</option>
                                          <option>3</option>
                                      </Form.Control>
                                  </Form.Group>
                              <Form.Group controlId="exampleForm.ControlSelect1">
                                   <Form.Label>Block</Form.Label>
                                      <Form.Control size="sm" as="select" onChange={(e)=>{changeBlock(e.target.value);}}>
                                          <option>Select</option>
                                          <option>1</option>
                                          <option>2</option>
                                          <option>3</option>
                                      </Form.Control>
                                  </Form.Group>
                             
                              <Form.Group controlId="formBasicPassword">
                                         <Form.Label style={{float:'left'}}>Amount</Form.Label>
                                              <Form.Control type="text" onChange={(e)=>{changeamount(e.target.value);}}/>
                              </Form.Group>
                                    
                            <Container>
                                <Row xs={2} md={4} lg={6}>
                                   <Col>
                                   <Button variant="outline-danger" onClick={Corpus} >Submit</Button>
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
