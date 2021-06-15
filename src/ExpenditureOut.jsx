import React,{useState,useEffect} from 'react';
import Adminnav from "./Adminnav";
import Axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Jumbotron,Button } from 'react-bootstrap';

export default function ExpenditureOut() {
    const[Expendituredata,setexpendituredata] = useState([]);
    const [Totalexpenditure,settotaldata] = useState([]);
    const [status,setQuerystatus] = useState('');
    useEffect( () => {
        Axios.get("http://localhost:3001/ExpenditureOut").then((response)=>{
            setexpendituredata(response.data);

        });
        
    }, []);
  useEffect(() => {
    Axios.get("http://localhost:3001/ExpenditureOut/total").then((response)=>{
        settotaldata(response.data);

    });

  }, [])
     
    return (
        <div>
        <Adminnav />
            <Jumbotron>
            <Table striped bordered hover style={{color:'black',}}>
  <thead>
    <tr>
     
      <th>Type</th>
      <th>Amount</th>
      <th>Spent On</th> 
         
    </tr>

  </thead>
  <tbody>
    
    {Expendituredata.map((val)=>{
        return(   
            <tr>                     
      
      
      <td>{val.type} </td>
      <td>{val.amount}</td>
      <td>{val.date}</td>
        
      
      </tr>
    )})}
    <th>Total Expenditure</th>
    {Totalexpenditure.map((val)=>{
        return(
            <>
            
            
            <td>{val.total}</td>
            </>
        
    )})}
   
  </tbody>
</Table>
   </Jumbotron>           
            
        </div>
    )
}

