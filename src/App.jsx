import React from "react";
import './App.css';
//import NavBar from "./Navbar";
import Forms from "./Form";
//import Ttl from "./Title";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Signsup from "./Signup";
import Home from "./Home";
import {} from "react-bootstrap";
import Adminhome from "./Adminnav";
import Community from "./Community";
import Query from "./Query";
import Flatdetails from "./Flatdetails";
import Team from "./Team";
import Queryrecieve from "./Queryrecieve";
import Income from "./Income";
import CommunityQuery1 from "./CommunityQuery1";
import CommunityQuery2 from "./CommunityQuery2";
import BlockQuery1 from "./BlockQuery1";
import BlockQuery2 from "./BlockQuery2";
import Userprofile from "./Userprofile";
import Bankbalance from "./Bankbalance";
import PublicHome from "./Publichome";
import About from "./About";
import Contact from "./Contact";
import Balancesheet from "./Balancesheet";
import Balancesheetyear from "./Balancesheetyear";
import Balancesheetmonth from "./Balancesheetmonth";
import Balancesheethalf from "./Balancesheethalf";
import IncomeOut from "./IncomeOut";
import Expenditure from "./Expenditure";
import ExpenditureOut from "./ExpenditureOut";
import Userquery from "./Userquery";
import Photos from "./Photos";
import Component from "./Component";
import TeamInput from "./TeamInput";
import TeamUpdate from "./TeamUpdate";
function App(){
  return (  
          
     <Router>         
             <Switch>
                      <Route exact path="/">
                        <PublicHome />
                      </Route>
                      <Route exact path="/About">
                        <About />
                      </Route>
                      <Route exact path="/Contact">
                        <Contact />
                      </Route>
                    
                    <Route exact path="/Form">
                        <Forms />
                      </Route>
                        <Route exact path= "/Signup" >
                          <Signsup />
                        </Route>
                         <Route exact path="/Home">
                           <Home />
                       </Route>
                       <Route exact path="/Adminhome">
                         <Adminhome />
                       </Route>
                       <Route exact path="/Community">
                         <Community />
                       </Route>
                       <Route exact path="/Query">
                         <Query />
                       </Route>
                       <Route exact path="/Flatdetails">
                         <Flatdetails />
                       </Route>
                       
                       <Route exact path="/Team">
                         <Team />
                       </Route>
                       <Route exact path="/Queryrecieve">
                         <Queryrecieve />
                       </Route>
                       <Route exact path="/Income">
                         <Income />
                       </Route>
                       <Route exact path="/CommunityQuery1">
                         <CommunityQuery1 />
                       </Route>
                       <Route exact path="/CommunityQuery2">
                         <CommunityQuery2 />
                       </Route>
                       <Route exact path="/BlockQuery1">
                         <BlockQuery1 />
                       </Route>
                       <Route exact path="/BlockQuery2">
                         <BlockQuery2 />
                       </Route>
                       <Route exact path="/Userprofile">
                         <Userprofile />
                       </Route>
                       <Route exact path="/Bankbalance">
                         <Bankbalance />
                       </Route>
                       <Route exact path="/Balancesheet">
                         <Balancesheet />
                       </Route>
                       <Route exact path="/Balancesheetyear">
                         <Balancesheetyear />
                       </Route>
                       <Route exact path="/Balancesheetmonth">
                         <Balancesheetmonth />
                       </Route>
                       <Route exact path="/Balancesheethalf">
                         <Balancesheethalf />
                       </Route>
                       <Route exact path="/IncomeOut">
                         <IncomeOut />
                       </Route>
                       <Route exact path="/Expenditure">
                         <Expenditure />
                       </Route>
                       <Route exact path="/ExpenditureOut">
                         <ExpenditureOut />
                       </Route>
                       <Route exact path="/Userquery">
                         <Userquery />
                       </Route>
                       <Route exact path="/Photos">
                         <Photos />
                       </Route>
                       <Route exact path="/Component">
                         <Component />
                       </Route>
                       <Route exact path="/TeamInput">
                         <TeamInput />
                       </Route>
                       <Route exact path="/TeamUpdate">
                         <TeamUpdate />
                       </Route>


















              </Switch>
    
   </Router>
   

    );
}

export default App;
