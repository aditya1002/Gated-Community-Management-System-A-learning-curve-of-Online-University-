import React,{useState,useEffect} from 'react';
import Adminnav from "./Adminnav";
import Axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Jumbotron,Button,Form,FormControl } from 'react-bootstrap';
export default function Bankbalance(){
    const[fromdate,setnewdate]=useState('');
    const[todate,setnewtodate]=useState('');
    const [Incomedata,setIncomedata] = useState([]);
    const [Expendituredata,setExpendituredata] = useState([]);
    const [updatestatus,changeupdatestatus] =useState('');
    const[Communitydata,setCommunitydata] = useState([]);
    const [date,setdatesdata] = useState([]);
    useEffect( () => {
        Axios.get("http://localhost:3001/Bankbalance").then((response)=>{
            setCommunitydata(response.data);
            //localStorage.setItem('datedetails',JSON.stringify(response.data))
        });  
    }, []);

    
    

    Axios.get("http://localhost:3001/Balancesheet").then((response)=>{
              //localStorage.setItem('datedetails',JSON.stringify(response.data))   
   })
    let dates = JSON.parse(localStorage.getItem('datedetails'))
   
           const updateauth = () =>{

                    changeupdatestatus(alerts())
                    
                }
               
            
           //changeupdatestatus(takeinput())
           
        
            
        
     
        
    const alerts =() =>{
            Getoutput()
            
    }
    const Getoutput = () =>{
        var error
        Axios.get(`http://localhost:3001/Balancesheet/${fromdate}`).then((response)=>{
            setdatesdata(response.data);
            
        });
        Axios.post("http://localhost:3001/Balancesheet/todate",{
            todate: todate,
        
            }).then((res)=>{
       
        })
        Axios.get(`http://localhost:3001/getIncomedata/${fromdate}`).then((response)=>{
            setIncomedata(response.data);
            //localStorage.setItem('datedetails',JSON.stringify(response.data))
        });
        Axios.get(`http://localhost:3001/getExpendituredata/${fromdate}`).then((response)=>{
            setExpendituredata(response.data);
            //localStorage.setItem('datedetails',JSON.stringify(response.data))
        });
    }
    return (
        <div>
            <Adminnav />
            
            <Jumbotron>
            <h1><u>Balance Sheet </u></h1>
            <Form>
<Form.Label>From Date</Form.Label></Form>
<Form inline>
      <FormControl  type="text" placeholder="YY-MM-DD  " className="mr-sm-4" onChange={(e)=>{setnewdate(e.target.value);}}  /></Form> 
       <Form>
       <Form.Label>To Date</Form.Label></Form>
<Form inline>
      <FormControl  type="text" placeholder="YY-MM-DD  " className="mr-sm-4" onChange={(e)=>{setnewtodate(e.target.value);}}  /></Form> 
       
    
   
     
    
      <Button variant="outline-success"style={{borderRadius:'10px',color:'black',bottom:'20px' }} onClick={updateauth}>Get Balance Sheet</Button>
 
            <Table striped bordered hover style={{color:'black',}}>
  <thead>
    <tr>
    <th>Income</th>
    
    {Incomedata.map((val)=>{
        return(
            <>
            <td>{val.totalincome}</td>
           </>
        )
    })}
        </tr>
    <tr>
   <th>Expenditure</th>
   {Expendituredata.map((val)=>{
       return(
           <>
           <td>{val.totalexpenditure}</td>
           </>
       )
   })}
   </tr>
   <tr>
      <th>Current Balance</th>
        {date.map((val)=>{
        return(   
        <>                         
      <td>{val.balance}</td>
    
    
      </>
    )})}
    </tr>
    
  
    </thead>
</Table>
  </Jumbotron>           
        </div>
    )




}