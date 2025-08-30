import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaYoutube, FaPinterest, FaInstagram } from "react-icons/fa";
import { TfiMobile } from "react-icons/tfi";
import { TfiEmail } from "react-icons/tfi";
import { FaMap } from "react-icons/fa";




export default function Footer() {
  return (
    <footer className=" footer  text-white pt-5 pb-3 " style={{ backgroundColor: "#1a2d62", height:"500%"
      }}>
      <Container>
        <Row className="mb-5">
         
          <Col md={3} sm={6} className="mb-5">
            <h5 className=""> <img src="./image/logo3.png" alt="logo"  /> </h5>
            <p className="small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim.
            </p>
            <p className="fw-bold">CONNECT WITH:</p>
            <div>
              <a href="#" className="text-white me-3"><FaInstagram /></a>
              <a href="#" className="text-white me-3"><FaFacebookF /></a>
             
              <a href="#" className="text-white me-3"><FaPinterest /></a>
              <a href="#" className="text-white"><FaTwitter /></a>
            </div>
          </Col>

          <Col md={3} sm={6} className="mb-5">
            <h6 className="fw-bold m-3">Courses</h6>
            <ul className="list-unstyled m-3 text-muted ">
              <li>Creative Writing</li>
              <li>Digital Marketing</li>
              <li>SEO Business</li>
              <li>Social Marketing</li>
              <li>Graphic Design</li>
              <li>Website Development</li>
            </ul>
          </Col>

          <Col md={3} sm={6} className="mb-4">
            <h6 className="fw-bold m-3">Company</h6>
            <ul className="list-unstyled m-3">
              <li>About Us</li>
              <li>Knowledge Base</li>
              <li>Affiliate Program</li>
              <li>Community</li>
              <li>Market API</li>
              <li>Support Team</li>
            </ul>
          </Col>

          <Col md={3} sm={6} className="mb-4">
            <h6 className="fw-bold m-3  ">Contact Info</h6>

            
            
            <p><TfiMobile  size={25} color="#2ecc71"
 className=" me-1" />phone number  <br />
  </p>
            <p><TfiEmail size={25} color="#2ecc71"
className="me-2" />email address
<br /></p>
            <p><FaMap size={25} color="#2ecc71" className="me-2" />location</p>
          </Col>
        </Row>

        <hr className="border-secondary" />

        <Row>
          <Col md={6} className="text-start ">
            <p className="mb-0">© 2025 Edusion. All Rights Reserved</p>
          </Col>
          <Col md={6} className="text-end">
            <a href="#" className="text-white me-3">Terms & Conditions</a>
            <a href="#" className="text-white me-3">Special</a>
            <a href="#" className="text-white">Privacy Policy</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
