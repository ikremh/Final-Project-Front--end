import React, { useState } from "react";
import { Container, Row, Col, Card, Dropdown, Pagination, Badge } from "react-bootstrap";
import { FaFileAlt, FaRegClock, FaStar } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";

const coursesData = [
  {
    id: 1,
    title: "Financial Security Thinking And Principles Theory",
    category: "Business",
    price: "$245",
    image: "/image/OUR1.jpg",
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
    image: "/image/OUR2.jpg",
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
    image: "/image/OUR3.jpg",
    lessons: 16,
    duration: "22 hours 30 minutes",
    rating: 5.0,
    level: "Intermediate",
  },
  {
    id: 4,
    title: "WordPress For Beginners – Master WordPress",
    category: "Digital Program",
    price: "Free",
    image: "/image/OUR4.jpg",
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
    image: "/image/OUR5.jpg",
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
    image: "/image/OUR6.jpg",
    lessons: 14,
    duration: "13 hours 20 minutes",
    rating: 3.33,
    level: "All Levels",
  },
  {
    id: 7,
    title: "User Experience Design Essentials Adobe xd UI UX Design",
    category: "modren physics",
    price: "Free",
    image: "/image/vr.jpg",
    lessons: 15,
    duration: "10 hours 40 minutes",
    rating: 4.5,
    level: "beginner",
  },
  {
    id: 8,
    title: "Basic Fundamentals of Interior & Graphics Design",
    category: "modren physics",
    price: "Free",
    image: "/image/sorenson.jpg",
    lessons: 16,
    duration: "15 hours 20 minutes",
    rating: 5.0,
    level: "beginner",
  },
  {
    id: 9,
    title: "Sales Training: Practical Sales Techniques",
    category: "finance",
    price: "Free",
    image: "/image/blomkvist.jpg",
    lessons: 14,
    duration: "2 hours 20 minutes",
    rating: 4.0,
    level: "expert",
  },
  {
    id: 10,
    title: "Increasing Engagement with Instagram & Facebook",
    category: "digital program",
    price: "Free",
    image: "/image/pixabay.jpg",
    lessons: 14,
    duration: "3 hours 20 minutes",
    rating: 4.5,
    level: "intermediate",
  },
  {
    id: 11,
    title: "Introduction to Color Theory & Basic UI/UX",
    category: "UI/UX Design",
    price: "Free",
    image: "/image/nguyen.jpg",
    lessons: 15,
    duration: "17 hours 20 minutes",
    rating: 4.33,
    level: "All Levels",
  },
];

export default function CoursesPage() {
  const [filters, setFilters] = useState({
    category: "All",
    page: 1,
    perPage: 9,
  });

  const filteredCourses =
    filters.category === "All"
      ? coursesData
      : coursesData.filter((c) => c.category === filters.category);

  const startIndex = (filters.page - 1) * filters.perPage;
  const endIndex = startIndex + filters.perPage;
  const paginatedCourses = filteredCourses.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredCourses.length / filters.perPage);

  const handleCategoryChange = (category) => {
    setFilters({ ...filters, category, page: 1 });
  };

  const handlePageChange = (page) => {
    setFilters({ ...filters, page });
  };

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-end mb-4">
        <Dropdown onSelect={handleCategoryChange}>
          <Dropdown.Toggle variant="outline-success">
            {filters.category === "All" ? "Filter Courses" : filters.category}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="All">All Courses</Dropdown.Item>
            <Dropdown.Item eventKey="modren physics">modren physics</Dropdown.Item>
            <Dropdown.Item eventKey="digital program">digital program</Dropdown.Item>
            <Dropdown.Item eventKey="UI/UX Design">UI/UX Design</Dropdown.Item>
            <Dropdown.Item eventKey="Business">Business</Dropdown.Item>
            <Dropdown.Item eventKey="finance">finance</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Row>
        {paginatedCourses.map((course) => (
          <Col key={course.id} md={4} className="mb-4" id="course">
            <Card className="course-card h-100 shadow-sm border-0">
              <div className="course-image-wrapper position-relative">
                <Card.Img
                  variant="top"
                  src={course.image}
                  className="course-image"
                />
              </div>
              <Card.Body>
                <Badge className="course-badge position-absolute top-0 start-0 m-2 ">
                  {course.price}
                </Badge>
                <Badge className="category mb-4 p-3">{course.category}</Badge>
                <Card.Title>{course.title}</Card.Title>

                <Card.Text className="course-meta text-muted">
                  <FaFileAlt /> {course.lessons} Lessons |{" "}
                  <FaRegClock className="me-1 " /> {course.duration}
                  <br />
                  <FaStar className="me-1 " /> {course.rating} | {""}
                  <GiNetworkBars className="me-1 " />
                  <span className="level-text text-dark text-muted fw-bold ">
                    {course.level}
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="space d-flex justify-content-between align-items-center mt-4">
        <div className="text-muted mb-2">
          Page {filters.page} of {totalPages}
        </div>

        <Pagination className="mb-2 custom-pagination">
          {filters.page > 1 && (
            <Pagination.Prev onClick={() => handlePageChange(filters.page - 1)} />
          )}
          {[...Array(totalPages).keys()].map((num) => (
            <Pagination.Item
              key={num + 1}
              active={filters.page === num + 1}
              onClick={() => handlePageChange(num + 1)}
              className={filters.page === num + 1 ? "active-page" : ""}
            >
              {num + 1}
            </Pagination.Item>
          ))}
          {filters.page < totalPages && (
            <Pagination.Next onClick={() => handlePageChange(filters.page + 1)} />
          )}
        </Pagination>
      </div>

     
   
    </Container>
  );
}
