import React from "react";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import Course from "../components/coursespage" 
function Home2() {
  return (
    <>
      <header id="about-section" className="  py-5   text-center" style={{backgroundImage:"./image/about-bg.png"}}>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
          
          <h1 className="text-center m-3">courses</h1>
      <button className="btn-about "><span>Home</span>/About us</button>

           

           
          </Col>
        </Row>
      </header>
   
<Course/>
    </>
  );
}

export default Home2;