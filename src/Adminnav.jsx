import React from "react";

import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import { Container } from "react-bootstrap";
import Ttl from "./Title";
// import Maintenance from "./Maintenance";
// import Adminhome from "./Adminhome";

function Adminnav(){
  const navst = {
    color: "black",
  };
    return (
        <div style={{backgroundColor :"#dcedc8", top : "20px"}}>
        <Ttl />

  <div>      
<Navbar  bg="" expand="lg" style={{backgroundColor:"#cc33ff"}}>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link style={navst} href="/Adminhome">Home</Nav.Link>
      <Nav.Link style={navst} href="/Signup">Add User</Nav.Link>
      <NavDropdown style={navst} title="View" id="basic-nav-dropdown">
        <NavDropdown.Item href="/Community">Community</NavDropdown.Item>
        <NavDropdown.Item href="/Block">BLock</NavDropdown.Item>
        <NavDropdown.Divider />
        </NavDropdown>
        <NavDropdown style={navst} title="Queries By"  id="basic-nav-dropdown">
        <NavDropdown style={navst} title="Community"  id="basic-nav-dropdown">
        <NavDropdown.Item href="/CommunityQuery1">1</NavDropdown.Item>
        <NavDropdown.Item href="/CommunityQuery2">2</NavDropdown.Item>
        <NavDropdown.Divider />
        </NavDropdown>
        <NavDropdown style={navst} title="Block"  id="basic-nav-dropdown">
        <NavDropdown.Item href="/BlockQuery1">1</NavDropdown.Item>
        <NavDropdown.Ite style={navst}m href="/BlockQuery2">2</NavDropdown.Ite>
        <NavDropdown.Divider />
        </NavDropdown>
       
        <NavDropdown.Item href="/Queryrecieve">ALL</NavDropdown.Item>
        <NavDropdown.Divider />
        </NavDropdown>
        <NavDropdown style={navst} title="Income" id="basic-nav-dropdown">
        <NavDropdown.Item href="/Income">Input Income</NavDropdown.Item>
        <NavDropdown.Item href="/IncomeOut"> View Incomes</NavDropdown.Item>
        <NavDropdown.Divider />
        </NavDropdown>

        <NavDropdown style={navst} title="Expenditure" id="basic-nav-dropdown">
        <NavDropdown.Item href="/Expenditure">Input Expenditure</NavDropdown.Item>
        <NavDropdown.Item href="/ExpenditureOut">View Expenditure</NavDropdown.Item>
        <NavDropdown.Divider />
        </NavDropdown>
        <NavDropdown style={navst} title="Accounts" id="basic-nav-dropdown">
         
        
        
        <NavDropdown style={navst} title="BalanceSheet" id="basic-nav-dropdown">
        <NavDropdown.Item href="/Balancesheetyear">Yearly</NavDropdown.Item>
        <NavDropdown.Item href="/Balancesheethalf">Half Yearly</NavDropdown.Item>
        <NavDropdown.Item href="/Balancesheetmonth">Monthly</NavDropdown.Item>
        <NavDropdown.Item href="/Balancesheet">Random Sheet Generator</NavDropdown.Item>
        <NavDropdown.Divider />
        </NavDropdown>

        <NavDropdown.Item href="/Bankbalance">Bank Balance</NavDropdown.Item>
        <NavDropdown.Divider />
        </NavDropdown>
       
        <NavDropdown style={navst} title="Team" id="basic-nav-dropdown">
        <NavDropdown.Item href="/TeamInput">Team Input</NavDropdown.Item>
        <NavDropdown.Item href="/TeamUpdate">View & Update</NavDropdown.Item>
        <NavDropdown.Divider />
        </NavDropdown>
      
        <Nav.Link style={navst} href="/Component">Component Settings</Nav.Link>  
        <Nav.Link style={navst}  href="/"> SignOut </Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>

</div>

</div>
);
};
export default Adminnav;
