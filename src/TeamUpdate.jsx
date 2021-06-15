import React,{useState,useEffect} from 'react';
import Adminnav from "./Adminnav";
import Axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Jumbotron,Button,FormControl,Form } from 'react-bootstrap';

export default function Queryrecieve() {
    const[Querydata,setQuerydata] = useState([]);
    const [name,setnewname] = useState('');
    const [email,setemail] = useState('');
    const [phone,setphone] = useState('');
    const [flatNo,setnewflat] = useState('');
    const [data,setteamdata] = useState([]);
    useEffect( () => {
        Axios.get("http://localhost:3001/Teamrecieve").then((response)=>{
            setteamdata(response.data);
        });  
    }, []);
    const Update = (designation) =>{
      var error
      Axios.put("http://localhost:3001/Team/update",{
        name : name,
        email : email,
        phone : phone,
        flatNo : flatNo,
        designation : designation
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
          
          setnewname("")
      }
    return (
        <div>
        <Adminnav />
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
      <td> <Form inline>
      <FormControl  type="text" placeholder="Name" className="mr-sm-4" onChange={(e)=>{setnewname(e.target.value);}}  />
       <Form inline>
      <FormControl  type="text" placeholder="Email" className="mr-sm-4" onChange={(e)=>{setemail(e.target.value);}}  />
    </Form> 
   
      
    </Form> </td>
      <td><Button variant="outline-success"style={{borderRadius:'10px',color:'black',bottom:'20px' }} onClick={()=>{Update(val.designation)}}>Update</Button></td>
      
     
     
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

