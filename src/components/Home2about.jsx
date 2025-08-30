import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckSquare } from "react-icons/fa";
import { ExploreButton } from './buttons'; 
export default function SectionOne() {
  return (

    <section className="platform py-4  " style={{ backgroundImage: "url('./image/backgroundabout.png')" }}>
      <Container >
        <Row className="align-items-center">
              <Col md={6} className="mb-4 mb-md-4 pe-md-1">
              <br />
              <b style={{ color: "#2eca7f"  }}>Best Online Learning Platform </b>
              <br />
            <h1 className="fw-bold">One Platform & Many <span  style={{ color: "#2eca7f", textDecoration: "underline" }}>courses</span>  for you.</h1>
            <br />
            <p className="text-muted" >
          From blogs to emails to ad copies, auto-generate catchy, original, and high-converting copies in popular tones languages.
            </p>
            <br />

    <ul className="m-0 p-2" style={{ listStyleType: "none", fontSize: "1.3rem", fontFamily: "Arial, sans-serif", lineHeight: "2",  color: "#050949f8",  }}>


        <li>  <FaCheckSquare size={26} color="#2eca7f"  />                     9/10 Average Satisfaction Rate</li>
        <li> <FaCheckSquare size={26} color="#2eca7f" />       96% Completitation Rate
</li>
        <li> <FaCheckSquare size={26} color="#2eca7f" />       Friendly Environment & Expert Teacher
</li>




    </ul>

<ExploreButton>ExploreButton </ExploreButton >

          </Col>
          
          <Col md={6} className="mb-4 mb-md-5 ps-md-5">
    <img 
              src="./image/about5.png" 
              alt=" about1"
              className="img-fluid rounded " 
            />
 
          </Col>

        </Row>



      </Container>

    </section>
  );
}
