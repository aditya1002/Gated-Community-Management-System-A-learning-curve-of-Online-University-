 import React,{useState,useEffect} from 'react';
import HomeNav from "./HomeNav";
import Axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Jumbotron } from 'react-bootstrap';
import Ttl from "./Title";


export default function Userprofile() {
    let user = JSON.parse(localStorage.getItem('details'))
    const[Querydata,setQuerydata] = useState([]);
    useEffect( () => {
        Axios.get(`http://localhost:3001/Userprofile/${user[0].flatNo}`).then((response)=>{
            setQuerydata(response.data);
        });  
    }, []);
    return (
        <div>
        <Ttl />
        <HomeNav />
            <Jumbotron>
            <Table striped bordered hover>
  <thead>
    <tr>
     
      <th> Name</th>
      <th>Community</th>
      <th>Block</th>
      <th>Flat NO</th>
    </tr>
  </thead>
  <tbody>
    <tr>
<td>    <h1>{user[0].fullName}</h1> </td>

<td><h1>{user[0].Community}</h1></td>

<td><h1>{user[0].Block}</h1></td>

<td><h1>{user[0].flatNo}</h1></td>

    </tr>
  </tbody>
</Table>
            <Table striped bordered hover style={{color:'black',}}>
  <thead>
    <tr>
      
      <th>My Payments</th>
      <th>Amount</th>     
    </tr>
  </thead>
  
  <tbody>
  
  
    {Querydata.map((val)=>{
        return(   
          <tr>                               
      <>
      
      <td>{val.type}</td>
      <td>{val.amount}</td>
    </>
    </tr>
      
    )})}
  
    
  </tbody>
  
</Table>
   </Jumbotron>           
            
        </div>
    )
}


        
