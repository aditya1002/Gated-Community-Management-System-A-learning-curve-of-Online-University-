import React from "react";
import Cards from "./Card";
import "./homenav.css";
import Container from 'react-bootstrap/Container'
import { Row, Col, Jumbotron } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import HomeNav from "./HomeNav";
import Ttl from "./Title";




function Home() {

  const jumbo = {
    padding: '1rem 2rem',
    height: '900px'
  }
  const imgstyle = {
    height: "720px",
    width: "100%",
  };

  return (
    <>
      <Ttl />
      <HomeNav />
      <Jumbotron style={jumbo}>
        <Carousel fade>
          <Carousel.Item >
            <img
              className="d-block w-100"
              src="https://vsktelangana.org/demo/wp-content/uploads/2017/12/Balagokulam-varshikotsav-12.jpg"
              alt="First slide"
            />

          </Carousel.Item>
          <Carousel.Item >
            <img
              style={imgstyle}
              src="https://vsktelangana.org/demo/wp-content/uploads/2017/12/Balagokulam-varshikotsav-3.jpg"
              alt="Second slide"
            >
            </img>

          </Carousel.Item>
          <Carousel.Item>
            <img
              style={imgstyle}
              src="https://zolostays.com/blog/wp-content/uploads/2019/09/Rainbow-vistas.jpg"
              alt="Third slide"
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              style={imgstyle}
              src="https://www.hssaus.org/wp-content/uploads/2013/04/Varshapratipada_Utsav.jpg"
              alt="First slide"
            />

          </Carousel.Item>


        </Carousel>
      </Jumbotron>


    </>
  );
}

export default Home;