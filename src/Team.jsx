import React,{useState,useEffect} from 'react';
import HomeNav from "./HomeNav";
import Ttl from "./Title";
import Axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Jumbotron,Button,FormControl,Form } from 'react-bootstrap';

export default function Queryrecieve() {
    const [data,setteamdata] = useState([]);
    useEffect( () => {
        Axios.get("http://localhost:3001/Teamrecieve").then((response)=>{
            setteamdata(response.data);
        });  
    }, []);
    return (
        <div>
        <Ttl />
        <HomeNav />
            <Jumbotron>
            <Table striped bordered hover style={{color:'black',}}>
  <thead>
    <tr>
    <th>Designation</th>
      <th>Name</th>
      <th>Email</th>
      <th>Flat No </th>
      <th>Phone No</th>
      
    </tr>
  </thead>
  <tbody>
    
    {data.map((val)=>{
        return(   
            <tr>                     
            <td>{val.designation}</td> 
            <td>{val.name}</td>

      <td>{val.email}</td>
      <td>{val.flatNo} </td>
      <td>{val.phone}</td>
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

