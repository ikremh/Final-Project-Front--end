import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { LoginButton } from "./Buttons";

export default function SectionOne() {
  return (
    <section className="py-5 ">
      <Container>
        <Row className="align-items-center">
              <Col md={6} className="mb-5 mb-md-2 pe-md-1">
            <img 
              src="../public/image/free-course.png" 
              alt=" free-courses"
              className="img-fluid rounded " 
            />
          </Col>
          <Col md={6} className="mb-5 mb-md-5 ps-md-5" >
            <h1 className="fw-bold">Learn new skills to go <span>ahead for your</span>  career.</h1>
            <p>
        
Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et simply. From blogs to emails to ad copies, auto-generate catchy, original, and high-converting copies in popular tones languages.From blogs to emails to ad copies, auto-generate catchy, original and high-converting copies.
            </p>
         
<p>
Auto-generate catchy original and high-converting copies in popular tones languages. From blogs to emails to ad copies auto-generate catchy</p>
 
   <div className="d-flex mt-5  "> 
   <LoginButton>  Explore More</LoginButton> 
</div>
          </Col>

        </Row>



      </Container>

    </section>
  );
}
