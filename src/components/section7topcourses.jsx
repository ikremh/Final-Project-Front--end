import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { FaFileAlt, FaRegClock, FaStar  } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { LoginButton } from "./Buttons";

export default function TopCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses([
      {
        id: 1,
        title: "Financial Security Thinking And Principles Theory",
        category: "Business",
        price: "$245",
        img: "/image/OUR1.jpg",
        lessons: 6,
        duration: "4 hours ",
        rating: 4.5,
        level: "All Levels",
      },
      {
        id: 2,
        title: "Professional Ceramic Moulding For Beginners",
        category: "Fitness",
        price: "$210",
        img: "/image/OUR2.jpg",
        lessons: 15,
        duration: "4 hours",
        rating: 5.0,
        level: "Beginner",
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
    ]);
  }, []);

  return (
    <Container className="courses-section my-5">
      <div className="courses-header text-right mb-5">
        <p className="courses-subtitle fw-bold">Popular Courses___________</p>
        <h2 className="courses-title fw-bold  " style={{ color: "#1a2d62" , fontSize: "2.8rem"}}>
          Choose Our <span className="courses-highlight "style={{ textDecoration: "underline" }}>Top Courses</span>
        </h2>
      </div>

      <Row>
        {courses.map((course) => (
          <Col key={course.id} md={4} className="mb-4" id="course">
            <Card className="course-card h-100 shadow-sm border-0">
              <div className="course-image-wrapper position-relative">
                <Card.Img
                  variant="top"
                  src={course.img}
                  className="course-image"
                />
                <Badge className="course-badge    position-absolute top-0 start-0 m-2 "    >
                  {course.price}
                </Badge  >
              </div>
              <Card.Body>
                <Badge  className="category mb-4 p-3" >
                  {course.category }
                </Badge>
                <Card.Title className="course-title">
                  {course.title}
                </Card.Title>
                <Card.Text className="course-meta text-muted">
                 <FaFileAlt />
{course.lessons} Lessons |{" "}
                  <FaRegClock className="me-1 " /> {course.duration}
                  <br />
                  <FaStar className="me-1 " /> {course.rating} | {""}
                  <GiNetworkBars className="me-1 "  />
                <span className="level-text fw-bold ">{course.level}</span>

                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="text-center mt-4">
              <LoginButton>View ALL Courses</LoginButton>

     
      </div>
    </Container>
  );
}
