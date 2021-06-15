import React,{useState,useEffect} from 'react';
import Adminnav from "./Adminnav";
import Axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Jumbotron,Button,Form,FormControl } from 'react-bootstrap';
export default function Balancesheetmonth(){
    const[fromdate,setnewdate]=useState('');
    const [Incomemonthtotal,setIncomemonthtotal] = useState([]);
    const [Expendituremonthtotal,setExpendituremonthtotal] = useState([]);
    const [Expendituremonth,setExpendituremonth] = useState([]);
    const [Incomemonth,setIncomemonth] = useState([]);
    const [updatestatus,changeupdatestatus] =useState('');
    const[Communitydata,setCommunitydata] = useState([]);
    const [date,setdatesdata] = useState([]);
    useEffect( () => {
        Axios.get("http://localhost:3001/Bankbalance").then((response)=>{
            setCommunitydata(response.data);
            localStorage.setItem('datedetails',JSON.stringify(response.data))
        });  
    }, []);
   
    let dates = JSON.parse(localStorage.getItem('datedetails'))
   
           const updateauth = () =>{

                    changeupdatestatus(alerts())
                    
                }
               
            
           //changeupdatestatus(takeinput())
           
        
            
        
     
        
    const alerts =() =>{
        
            // Save it!
            Getoutput()
            
    }
    const Getoutput = () =>{
        var error
        Axios.get(`http://localhost:3001/Balancesheetmonth/${fromdate}`).then((response)=>{
            setdatesdata(response.data);
            
        });
        Axios.get(`http://localhost:3001/getIncomemonthtotal/${fromdate}`).then((response)=>{
            setIncomemonthtotal(response.data);
            
        });
        Axios.get(`http://localhost:3001/getExpendituremonthtotal/${fromdate}`).then((response)=>{
            setExpendituremonthtotal(response.data);
            
        });
        Axios.get(`http://localhost:3001/getmonthExpenditure/${fromdate}`).then((response)=>{
            setExpendituremonth(response.data);
            
        });
        Axios.get(`http://localhost:3001/getmonthIncome/${fromdate}`).then((response)=>{
            setIncomemonth(response.data);
            
        });
    
    
        }
    return (
        <div>
            <Adminnav />
            <Jumbotron>
            <h1> <u>Monthly Balance Sheet</u></h1>
            <Form>
<Form.Label>Enter From Date</Form.Label></Form>
<Form inline>
      <FormControl  type="text" placeholder="YY-MM-DD  " className="mr-sm-4" onChange={(e)=>{setnewdate(e.target.value);}}  /></Form> 
       <Form>
       
    </Form> 
    <Button variant="outline-success"style={{borderRadius:'10px',color:'black',bottom:'20px' }} onClick={updateauth}>Get Balance Sheet</Button>
            <Table striped bordered hover style={{color:'black',}}>
  <thead>
    <tr>
    <th>Type</th>
    
     <th>Income</th>   
    
      
       <td></td>
        
    </tr>
    </thead>
    <tbody>
    
    {Incomemonth.map((val)=>{
        return(
            <>
            <tr>
            <td>{val.type}</td>
            <td>{val.amount}</td>
            </tr>
           </>
        )
    })}
    <th>Total Income</th>
    {Incomemonthtotal.map((val)=>{
        return(
            <>
            <td>{val.totalincome}</td>         
           </>
        )
    })}
    
    </tbody>
</Table>
<Table striped bordered hover style={{color:'black',}}>
<thead>
    <th>Type</th>
   <th>Expenditure</th>
   </thead>
   <tbody>
    
    {Expendituremonth.map((val)=>{
       return(
           <>
           <tr>
           <td>{val.type}</td>
           <td>{val.amount}</td>
           </tr>
           </>
       )
   })}
    <tr>
    <th>Total Expenditure</th>
    {Expendituremonthtotal.map((val)=>{
       return(
           <>
           <td>{val.totalexpenditure}</td>
           </>
       )
   })}
   
    </tr>   
    </tbody>
    <th>Current Balance</th>
   
    {date.map((val)=>{
        return(   
        <>                         
      <td>{val.balance}</td>
    
    
      </>
    )})}
  
</Table>
   
     
    
     
   </Jumbotron>           
        </div>
    )




}