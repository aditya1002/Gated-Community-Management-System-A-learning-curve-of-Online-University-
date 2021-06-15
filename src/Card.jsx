import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Navbar'
import React from "react";

function Cards(){
    return(
        <div>
<Card  classname='card' border="primary" style={{top:'20px' , width: '18rem'}}>
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>Primary Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
    </div>)
}
export default Cards;