import React from "react";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";

import Card from "../components/contectcard"
import FormC from "../components/contectform"
function Home2() {
  return (
    <>
      <header id="about-section" className="  py-5   text-center" style={{backgroundImage:"./image/about-bg.png"}}>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
          
          <h1 className="text-center m-3">Contact</h1>
      <button className="btn-about "><span>Home</span>/About us</button>

           

           
          </Col>
        </Row>
      </header>
    <Card/>
   <FormC/>

    </>
  );
}

export default Home2;