import React from "react";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import { FaPaperPlane } from 'react-icons/fa'; 
import Cardone from "../components/card";
import { LoginButton } from "../components/Buttons";
import Popular from "../components/section10Topics To Learn ";
import Section4 from"../components/home2section4";
import TopCourses from "../components/section7topcourses";
import Ourgreat from "../components/section4";
import Background from "../components/Home2background.jsx"
import Spider from "../components/section5spider.jsx"
import About from "../components/Home2about.jsx";
import Cardprice from"../components/home2card.jsx";
import Oure from "../components/section14OurLatest .jsx"
function Home2() {
  return (
    <>
      <header id="hero-section" className="py-5 m-5 text-center" style={{backgroundImage:"./image/home2.png"}}>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
          
          <h1 className="text-center">about us</h1>
      

           

           
          </Col>
        </Row>
      </header>
      <Cardone className="py-5 m-5"/>
<Popular/>
<Section4/>
<TopCourses />
<Ourgreat/>
<Background/>
<Spider/>
<About/>
<Cardprice/>
<Oure/>
    </>
  );
}

export default Home2;