import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TfiMedall } from "react-icons/tfi";
import { TfiWand } from "react-icons/tfi";
import { LoginButton } from "./buttons";

export default function SectionOne() {
  return (
    <section className="py-5 ">
      <Container>
        <Row className="align-items-center">
              <Col md={6} className="mb-4 mb-md-4 pe-md-1">
            <img 
              src="./image/about1.png" 
              alt=" about1"
              className="img-fluid rounded shadow" 
            />
          </Col>
          <Col md={6} className="mb-4 mb-md-5 ps-md-5">
            <h1 className="fw-bold">Learn new skills to go <span>ahead for your</span>  career.</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et simply.
            </p>
         

             <div className="box-our">

    <div className="icon-wrapper">
      <TfiMedall />
    </div>
    <h2 >Our Mission</h2>
    <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
   </div>
    <div className="box-our">

    <div className="icon-wrapper">
        <TfiWand />
   
    </div>
    <h2 >Our Vision</h2>
    <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
   </div>
   <div className="d-flex  "> 
   <LoginButton>  Discover More</LoginButton> 
</div>
          </Col>

        </Row>



      </Container>

    </section>
  );
}
