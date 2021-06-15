import React,{useState,useEffect} from 'react';
import Adminnav from "./Adminnav";
import Axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Jumbotron,Button,Form,FormControl } from 'react-bootstrap';
export default function Community() {
 const[newemail,setemail]=useState('');
 const [newfullName,setnewfullName] = useState('');
    const[Communitydata,setCommunitydata] = useState([]);
    useEffect( () => {
        Axios.get("http://localhost:3001/Community").then((response)=>{
            setCommunitydata(response.data);
        });  
    }, []);
      const Update = (flatNO) =>{
      var error
      Axios.put("http://localhost:3001/Community/update",{
          fullName: newfullName,
          email : newemail,
          flatNo : flatNO
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
          
          setnewfullName("")
      }
      const Delete = (flatNO) =>{
        var error
        Axios.delete(`http://localhost:3001/Community/delete/${flatNO}`, {
        
        });
             
            if(error){
                alert("err")
            }
            else{
                alert("Deleted Successfully \n Refresh to See");
            }
            
          
        };

      return (
        <div>
            <Adminnav />
            <Jumbotron>
            <Table striped bordered hover style={{color:'black',}}>
  <thead>
    <tr>
      <th>Name</th>
      <th>Community</th>
      <th>Block</th>
      <th>Flat</th>
      <th>email</th>
    </tr>
  </thead>
  <tbody>
    
    {Communitydata.map((val)=>{
        return(   
            <tr>                     
      <td>{val.fullName}</td>
      <td>{val.Community} </td>
      <td>{val.Block}</td>
      <td>{val.flatNO}</td>
      <td>{val.email}</td>
       <td> <Form inline>
      <FormControl  type="text" placeholder="Name" className="mr-sm-4" onChange={(e)=>{setnewfullName(e.target.value);}}  />
       <Form inline>
      <FormControl  type="text" placeholder="Email" className="mr-sm-4" onChange={(e)=>{setemail(e.target.value);}}  />
    </Form> 
   
      <Button variant="outline-success"style={{borderRadius:'10px',color:'black',bottom:'20px' }} onClick={()=>{Delete(val.flatNO)}}>Delete</Button>
    </Form> </td>
      <td><Button variant="outline-success"style={{borderRadius:'10px',color:'black',bottom:'20px' }} onClick={()=>{Update(val.flatNO)}}>Update</Button></td>
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
