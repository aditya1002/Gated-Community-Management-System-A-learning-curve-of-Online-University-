import React,{useState,useEffect} from 'react';
import Adminnav from "./Adminnav";
import Axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Jumbotron,Button } from 'react-bootstrap';

export default function Queryrecieve() {
    const[Querydata,setQuerydata] = useState([]);
    const [status,setQuerystatus] = useState('');
    useEffect( () => {
        Axios.get("http://localhost:3001/Queryrecieve").then((response)=>{
            setQuerydata(response.data);
        });  
    }, []);
    const Update = (query,status) =>{
      var error
      Axios.put("http://localhost:3001/Queryrecieve/update",{
         query : query,
         status : status

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
              alert("Updated Successfully \n Refresh To see");
          }
          
          setQuerystatus("")
      }
    return (
        <div>
        <Adminnav />
            <Jumbotron>
            <Table striped bordered hover style={{color:'black',}}>
  <thead>
    <tr>
      <th>Email</th>
      <th>Community</th>
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
      <td>{val.community}</td>
      <td>{val.block}</td>
      <td>{val.flatNo} </td>
      <td>{val.query}</td>
      <td>{val.time}</td>
      <td>{val.status}</td>
      <td><Button variant="outline-success"style={{borderRadius:'10px',color:'black',bottom:'20px' }} onClick={()=>{Update(val.query,val.status)}}>Update</Button></td>
     
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

