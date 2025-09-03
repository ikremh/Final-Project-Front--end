import React from "react";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";

import { FaPaperPlane } from 'react-icons/fa'; 
import Cardone from "../components/card";
import Popular from "../components/section10Topics To Learn ";
import Section4 from"../components/home2section4";
import TopCourses from "../components/section7topcourses";
import Ourgreat from "../components/section4";
import Background from "../components/Home2background.jsx"
import Spider from "../components/section5spider.jsx"
import About from "../components/Home2about.jsx";
import Cardprice from"../components/home2card.jsx";
import Oure from "../components/section14OurLatest .jsx"
import Subscripe from "../components/section9Subscripbe.jsx"
import Courses from "../components/homecourses.jsx"
function Home2() {
  return (
    <>
      <header id="hero-section" className="py-5 m-5 text-center" style={{backgroundImage:"./image/home2.png"}}>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <h1 className="hero-title ">
              Get smart <span className="highlight">opportunity for</span>{" "}
              your best future
            </h1>
            <p className="hero-subtitle mt-3">
              It is a long established fact that reader will be distracted
              readable content of a page when.
            </p>

            
             <div className="email-subscribe">
      <input
        type="email"
        placeholder="Search  Your Course Here"
        className="email-input"
      />
      <button className="search-button text-light">
                Search

        <FaPaperPlane className="m-2 mb-1" color="white" size={17} />
      </button>
    </div>
          

            <div className="popular-topics mt-3 ">
              <span className="text-muted">Popular Topic: </span>
              <a href="#">Business</a>, <a href="#">Data Science</a>,{" "}
              <a href="#">Digital Program</a>, <a href="#">Finance</a>
            </div>
          </Col>
        </Row>
      </header>
      <Cardone className="py-5 m-5"/>
<Popular/>
<Section4/>
<Courses/>
<Ourgreat/>
<Background/>
<Spider/>
<About/>
<Cardprice/>
<Subscripe/>
<Oure/>
    </>
  );
}

export default Home2;