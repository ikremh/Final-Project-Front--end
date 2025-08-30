import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaLinkedinIn  } from "react-icons/fa";
import { CiFileOn } from "react-icons/ci";
import { TfiUser } from "react-icons/tfi";



export default function Instructors() {
  const data = [
    {
      name: "Daniel Miller",
      title: "Logo Expert",
      img: "./image/team2.jpg",
      courses: 3,
      students: 3,
    },
    {
      name: "Masum Billah",
      title: "Developer",
      img: "./image/team1.jpg",
      courses: 6,
      students: 5,
    },
    {
      name: "Kenneth Renteria",
      title: "Marketer",
      img: "./image/team3.jpg",
      courses: 0,
      students: 0,
    },
    {
      name: "Richard Hood",
      title: "UI UX Designer",
      img: "./image/team4.jpg " ,
      courses: 2,
      students: 0,
    },
  ];

  return (
    <section className="team py-4">
      <Container>
        <div className=" mb-5">
          <h6 color="#2ecc71">TEAM MEMBER________</h6>
          <h2 color="#1b">
            Our Expert


            <span >Instructors</span>
          </h2>
        </div>
        <Row>
          {data.map((item, idx) => (
            <Col md={3} sm={6} key={idx} className="card-team  mb-4">
              <Card className= "  shadow border-0">
                <Card.Img
                className="image-team"
                  variant="top"
                  src={item.img}
                  
                />
                <Card.Body className="text-white text-center rounded-bottom   rounded-top " style={{backgroundColor: "#2eca7f "  , width: "250px", margin: "auto", borderRadius: "75px"  , marginTop: "-40px" , border: "1px solid #2eca7f" }}>
                  <h5 className="fw-bold">{item.name}</h5>
                  <p className="mb-2">{item.title}</p>
                  <p className="mb-1">
                   <CiFileOn />
{item.courses} Courses
                  </p>
                  <p className="mb-3">
                    <TfiUser />
{item.students} Students
                  </p>
                  <div>
                    <Button variant="light" size="sm" className="rounded-circle mx-1">
                      <FaFacebookF />
                    </Button>
                    <Button variant="light" size="sm" className="rounded-circle mx-1">
                      <FaTwitter />
                    </Button>
                    <Button variant="light" size="sm" className="rounded-circle mx-1">
                      <FaLinkedinIn />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
