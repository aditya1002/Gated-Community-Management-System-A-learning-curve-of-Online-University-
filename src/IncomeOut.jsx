import React,{useState,useEffect} from 'react';
import Adminnav from "./Adminnav";
import Axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Jumbotron,Button,Form,InputGroup   } from 'react-bootstrap';
import "./incomeout.css";

export default function IncomeOut() {
    const[Incomedata,setIncomedata] = useState([]);
    const [Totalincome,settotaldata] = useState([]);
    const [status,setQuerystatus] = useState('');
    const [maintenancecheck,setmaintenance] = useState('');
    const [securitycheck,setsecurity] = useState('');
    const[ corpuscheck,setcorpus] = useState('');
    const [eventcheck,setevent] = useState('');
    useEffect( () => {
        Axios.get("http://localhost:3001/Incomeout").then((response)=>{
            setIncomedata(response.data);

        });
        
    }, []);
  useEffect(() => {
    Axios.get("http://localhost:3001/Incomeout/total").then((response)=>{
        settotaldata(response.data);

    });

  }, [])
  const sortit = ()=>{
    
    
console.log(corpuscheck);
  }
     
    return (
        <div>
        <Adminnav />
            <Jumbotron>
            
            <div className="filter">
            <h4>Sort By</h4>
            
            <Form.Group className="filter" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" value="maintenance"label="Maintenance" onChange={(e) => { setmaintenance(e.target.value,e.target.checked); }} />
    
  </Form.Group>
  <Form.Group className="filter"controlId="formBasicCheckbox">
    <Form.Check type="checkbox" value="Corpus" label="Corpus" onChange={(e) => { setcorpus(e.target.value,e.target.checked); }} />
    
  </Form.Group>
  <Form.Group className="filter"controlId="formBasicCheckbox">
    <Form.Check type="checkbox" value="maintenance"label="Events" onChange={(e) => { setevent(e.target.value,e.target.checked); }} />
  
  </Form.Group>
  <Form.Group className="filter"controlId="formBasicCheckbox">
    <Form.Check type="checkbox" value="security"label="Security Deposit" onChange={(e) => { setsecurity(e.target.value,e.target.checked); }} />
  
  </Form.Group>
  <Button  variant="dark" onClick={sortit} >Apply</Button>
</div>

            <Table striped bordered hover style={{color:'black',}}>
            
  <thead>
    <tr>
      <th>Flat NO</th>
      <th>Type</th>
      <th>Amount</th>
      <th>Date of Recieval</th> 
         
    </tr>

  </thead>
  <tbody>
    
    {Incomedata.map((val)=>{
        return(   
            <tr>                     
      
      <td>{val.flatNo}</td>
      <td>{val.type} </td>
      <td>{val.amount}</td>
      <td>{val.date}</td>
        
      
      </tr>
    )})}
    <th>Total Income</th>
    {Totalincome.map((val)=>{
        return(
            <>
            <td></td>
            
            <td>{val.total}</td>
            </>
        
    )})}
   
  </tbody>

</Table>
   </Jumbotron>           
            
        </div>
    )
}

