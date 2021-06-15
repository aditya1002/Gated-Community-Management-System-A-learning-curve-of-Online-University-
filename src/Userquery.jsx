import React,{useState,useEffect} from 'react';
import HomeNav from "./HomeNav";
import Axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Jumbotron } from 'react-bootstrap';


export default function Userquery() {
    let user = JSON.parse(localStorage.getItem('details'))
    const[Querydata,setQuerydata] = useState([]);
    useEffect( () => {
        Axios.get(`http://localhost:3001/Userquery/${user[0].flatNo}`).then((response)=>{
            setQuerydata(response.data);
        });  
    }, []);
    return (
        <div>
        <HomeNav />
            <Jumbotron>
            <Table striped bordered hover style={{color:'black',}}>
  <thead>
    <tr>
      
     <th>Query</th>
      <th>Status </th>
    </tr>
  </thead>
  <tbody>

  
    {Querydata.map((val)=>{
        return(       
    <tr>
      
      <td>{val.query}</td>
      <td>{val.status}</td>
         
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


