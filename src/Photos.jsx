import React from 'react'
import Ttl from "./Title";
import HomeNav from "./HomeNav";
import {Container,Row,Col,Image} from "react-bootstrap";

export default function Photos() {
    return (
        <div>
        <Ttl />
       <HomeNav />
        <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src="https://balagokulam.hssus.org/wp-content/uploads/2020/06/story_session.png" rounded />
    </Col>
    <Col xs={6} md={4}>
      <Image src="https://balagokulam.hssus.org/wp-content/uploads/2020/06/children_khel.png" roundedCircle />
    </Col>
    <Col xs={6} md={4}>
      <Image src="https://balagokulam.hssus.org/wp-content/uploads/2020/06/utsav.png" thumbnail />
    </Col>
  </Row>
</Container>
            
        </div>
    )
}
