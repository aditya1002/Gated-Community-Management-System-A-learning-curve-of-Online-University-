import React, { useState,useEffect } from 'react';
import {Container,Row,Col, Jumbotron,Grid} from 'react-bootstrap';
import Box from '@material-ui/core/Box';
import "./title.css";
import Axios from 'axios';


function Ttl(){
  const[title,settitle] = useState([]);
  let Componentdetail = JSON.parse(localStorage.getItem('Componentdetails'))
  useEffect(() => {
    Axios.get(`http://localhost:3001/Componentdetail/${Componentdetail[0].name}`).then((response)=>{
        settitle(response.data);
    });  

  }, []) 
  

    return(
        <header className="col">
    {title.map((val)=>{
        return(   
          <>
        {val.name}
        {val.subtitle}
        </>
    )})}
</header>
    );
}
export default Ttl;
// extends Component{
//   constructor(){
//       super()
//       this.state ={
//           fullName : '',
//           flatNo : '',
//           email : '',
//           username : '',
//           password : ''

//       }
//   }
//   changefullName(event){
//       this.setState({
//           fullName: event.target.value
//       })
//   }
//   changeflatNo(event){
//       this.setState({
//           flatNo: event.target.value
//       })
//   }
//   changeemail(event){
//       this.setState({
//           email: event.target.value
//       })
//   }
//   changeusername(event){
//       this.setState({
//           username: event.target.value
//       })
//   }
//   changepassword(event){
//       this.setState({
//           password: event.target.value
//       })
//   }
//   render()
//   {