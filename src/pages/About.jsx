import React from "react";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";

import Cardone from "../components/card";
import Section4 from"../components/home2section4";
import Ourgreat from "../components/section4";
import Spider from "../components/section5spider.jsx";
import About from "../components/Home2about.jsx";
import Cardprice from"../components/home2card.jsx";
import Oure from "../components/section14OurLatest .jsx";
import Why from "../components/Section6why.jsx";
import Ourteam from"../components/Aboutourteam.jsx"
import Qustions from "../components/aboutQuestions.jsx" 
function Home2() {
  return (
    <>
      <header id="about-section" className="  py-5   text-center" style={{backgroundImage:"./image/about-bg.png"}}>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
          
          <h1 className="text-center m-3">about us</h1>
      <button className="btn-about "><span>Home</span>/About us</button>

           

           
          </Col>
        </Row>
      </header>
      <Cardone className="py-5 m-5"/>
      <Section4/>
      <Why/>
<Ourteam/>
<Ourgreat/>
<Qustions/>
<Spider/>

    </>
  );
}

export default Home2;