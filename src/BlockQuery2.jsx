import React,{useState,useEffect} from 'react';
import Adminnav from "./Adminnav";
import Axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Jumbotron } from 'react-bootstrap';

export default function BlockQuery1() {
    const[Querydata,setQuerydata] = useState([]);
    useEffect( () => {
        Axios.get("http://localhost:3001/Queryrecieve/Blockrecieve2").then((response)=>{
            setQuerydata(response.data);
        });  
    }, []);
    return (
        <div>
        <Adminnav />
            <Jumbotron>
            <Table striped bordered hover style={{color:'black',}}>
  <thead>
    <tr>
      <th>Email</th>
      <th>Block</th>
      <th>Flat No </th>
      <th>Query</th>
      <th>Time of Recieval</th> 
      <th>Status</th>     
    </tr>
  </thead>
  <tbody>
    
    {Querydata.map((val)=>{
        return(   
            <tr>                     
      
      <td>{val.email}</td>
      <td>{val.Block}</td>
      <td>{val.flatNo} </td>
      <td>{val.textarea}</td>
      <td>{val.time}</td>
      <td></td>
      </tr>
    )})}
    
    <tr>
     
    </tr>
  </tbody>
</Table>
   </Jumbotron>           
            
        </div>
    )
}

