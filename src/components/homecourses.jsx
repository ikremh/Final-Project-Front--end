import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaFileAlt, FaRegClock, FaStar } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { LoginButton } from "./Buttons";

export default function TopCourses({ md = 6, cardHeight = 220, courses: coursesProp }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(
      coursesProp ?? [
        {
          id: 1,
          title: "Financial Security Thinking And Principles Theory",
          category: "Business",
          price: "$265",
          img: "/image/OUR1.jpg",
          lessons: 6,
          duration: "4 hours",
          rating: 4.5,
          level: "All Levels",
        },
        {
          id: 2,
          title: "Professional Ceramic Moulding For Beginners",
          category: "Finance",
          price: "$250",
          img: "/image/OUR2.jpg",
          lessons: 15,
          duration: "4 hours",
          rating: 5.0,
          level: "All Levels",
        },


           {
        id: 3,
        title: "Basic Fundamentals Of Interior & Graphics Design",
        category: "UI/UX Design",
        price: "Free",
        img: "/image/OUR3.jpg",
        lessons: 16,
        duration: "22 hours 30 minutes",
        rating: 5.0,
        level: "Intermediate" ,
      },
      {
        id: 4,
        title: "WordPress For Beginners – Master WordPress",
        category: "Digital Program",
        price: "Free",
        img: "/image/OUR4.jpg",
        lessons: 15,
        duration: "7 hour 30 minutes",
        rating: 4.33,
        level: "Beginner",
      },
      {
        id: 5,
        title: "The Complete Python Course For Beginner 2023",
        category: "Data Science",
        price: "$300",
        img: "/image/OUR5.jpg",
        lessons: 14,
        duration: "18 hours 20 minutes",
        rating: 4.0,
        level: "All Levels",
      },
      {
        id: 6,
        title: "Ultimate Photoshop Training: From Beginner",
        category: "UI/UX Design",
        price: "Free",
        img: "/image/OUR6.jpg",
        lessons: 14,
        duration: "13 hours 20 minutes",
        rating: 3.33,
        level: "All Levels",
      },
      ]
    );
  }, [coursesProp]);

  return (
    <Container className="my-5">
      <div className="mb-5">
        <p className="first-line fw-bold" >Popular Courses___________</p>
        <h2 style={{ color: "#1a2d62", fontSize: "2.4rem" }}>
          Choose Our <span style={{ textDecoration: "underline" , color:"#2eca7f"}}>Top Courses</span>
        </h2>
      </div>

      <Row>
        {courses.map((c) => (
          <Col key={c.id} md={md} className="mb-4">
            <Card className="shadow border-0 h-100 courseH-card">
              <Row className="g-0">
                <Col md={5} className="position-relative">
                  <img
                    src={c.img}
                    alt={c.title}
                    className=" h-200 object-fit-cover courseH-img"
                    style={{
                      height: cardHeight,
                      borderTopLeftRadius: ".5rem",
                      borderBottomLeftRadius: "0",
                      width:"290px"
                    }}
                  />
                  <div className="courseH-price-badge"> {c.price} </div>
                </Col>

                <Col md={7}>
                  <Card.Body className="h-100 d-flex flex-column justify-content-center">
                    <a href="#" className="courseH-category">{c.category}</a>
                    <Card.Title className="courseH-title fw-bold mb-4 ">
                      {c.title}
                    </Card.Title>
                  </Card.Body>
                </Col>
              </Row>

              <div className="courseH-meta  px-3 py-4  ">
                <span><FaFileAlt /> {c.lessons} Lessons</span>
                <span><FaRegClock  /> {c.duration}</span>
                <span><FaStar /> {c.rating}</span>
                <span><GiNetworkBars /> {c.level}</span>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="text-center mt-4">
        <LoginButton>View All Courses</LoginButton>
      </div>
    </Container>
  );
}
