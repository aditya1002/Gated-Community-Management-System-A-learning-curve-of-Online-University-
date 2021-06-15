import React,{useState,useEffect} from 'react';
import Adminnav from "./Adminnav";
import Axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Jumbotron,Button,Form,FormControl } from 'react-bootstrap';
export default function Bankbalance(){
    const[newdate,setnewdate]=useState('');
    const [newbalance,setnewbalance] = useState('');
    const [updatestatus,changeupdatestatus] =useState('');
    const[Communitydata,setCommunitydata] = useState([]);
    const [date,setdatesdata] = useState([]);
    useEffect( () => {
        Axios.get("http://localhost:3001/Bankbalance").then((response)=>{
            setCommunitydata(response.data);
            localStorage.setItem('datedetails',JSON.stringify(response.data))
        });  
    }, []);
    Axios.get("http://localhost:3001/Bankbalance/all").then((response)=>{
        setdatesdata(response.data);
        localStorage.setItem('datedetails',JSON.stringify(response.data))
    });

    let dates = JSON.parse(localStorage.getItem('datedetails'))
   
           const updateauth = () =>{

               for(var i in dates){
               if(newdate === dates[i].date){
                    changeupdatestatus(alerts())
                    
                }
                else{
                   changeupdatestatus(takeinput())
               }
               break;
            }
           //changeupdatestatus(takeinput())
           
        }
            
        
     
        
    const alerts =() =>{
        if ( window.confirm('Are you sure you want to update this..? \n Since Balance with the entered date exists')) {
            // Save it!
            Update()
            console.log('Thing was saved to the database.');

          } else {
            // Do nothing!
            console.log('Thing was not saved to the database.');
          }
    }
    const takeinput = () =>{
        
        var error
        Axios.post("http://localhost:3001/Bankbalance/insert",{
           date : newdate,
           balance: newbalance
    
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
        alert("Balance Inserted  Successfully \n Refresh to see Current Balance");
        
    }

    
  }
    const Update = () =>{
        var error
        Axios.put("http://localhost:3001/Bankbalance/update",{
            date: newdate,
            balance : newbalance,
            
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
            
            
        }
    return (
        <div>
            <Adminnav />
            <Jumbotron>
            <Table striped bordered hover style={{color:'black',}}>
  <thead>
    <tr>
      <th>Current Balance</th>
    
  
  
    
    {Communitydata.map((val)=>{
        return(   
                                 
      <th>{val.balance}</th>
    
      
    )})}
    </tr>
    </thead>
</Table>
<Form>
<Form.Label>As On(Date)</Form.Label></Form>
<Form inline>
      <FormControl  type="text" placeholder="YY-MM-DD  " className="mr-sm-4" onChange={(e)=>{setnewdate(e.target.value);}}  /></Form> 
       <Form>
       <Form.Label>Balance</Form.Label></Form>
       <Form inline>
      <FormControl  type="text" placeholder="Enter Amount" className="mr-sm-4" onChange={(e)=>{setnewbalance(e.target.value);}}  />
    </Form> 
   
     
    
      <Button variant="outline-success"style={{borderRadius:'10px',color:'black',bottom:'20px' }} onClick={updateauth}>Submit</Button>
   </Jumbotron>           
        </div>
    )




}