import React,{useState,useEffect} from 'react';
import Homenav from "./HomeNav";
import Axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Jumbotron } from 'react-bootstrap';
export default function Community() {
    const[Communitydata,setCommunitydata] = useState([]);
    useEffect( () => {
        Axios.get("http://localhost:3001/Flatdetails").then((response)=>{
            setCommunitydata(response.data);
        });  
    }, []);
    
    return (
        <div>
            <Homenav />
            <Jumbotron>
            <Table striped bordered hover style={{color:'black',}}>
  <thead>
    <tr>
      <th>First Name</th>
      <th>Flat No</th>
      <th>Community</th>
      <th>Block</th>
    </tr>
  </thead>
  <tbody>
    
    {Communitydata.map((val)=>{
        return(   
            <tr>                     
      <td>{val.fullName}</td>
      <td>{val.flatNO} </td>     
      <td>{val.Community}</td>
      <td>{val.Block}</td>
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
