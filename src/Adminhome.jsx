import React,{useState,useEffect} from 'react'
import Axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Jumbotron } from 'react-bootstrap';

export default function Adminhome() {
    const[datacount,setdatacount] = useState([]);
    var count
    useEffect(() => {
        Axios.get("http://localhost:3001/Adminhome").then((response)=>{
            count = response;
            setdatacount(count);
                       
        });
        
    },[]);
    // const display = () =>{
       
    // }
    return (
        <div>
         <Jumbotron>
            <Table striped bordered hover style={{color:'black',}}>
  <thead>
    <tr>
      <th>Number of Apartments</th>
        
    </tr>
  </thead>
  <tbody>
    
  
      <tr>
     {setdatacount.count}
    </tr>
  
    
  </tbody>
</Table>
   </Jumbotron>           
            
        </div>
    )
}
