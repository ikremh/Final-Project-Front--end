import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";

export default function EventsSection() {
  return (
    <section className=" py-5">
      <Container>
        <p className=" fw-bold"   style={{ color: "#2eca7f" }}>UPCOMING EVENTS______________</p>
        <h2 className="fw-bold">
          Join With Us <span className="" style={{ color: "#2eca7f" }}>Our Events</span>
        </h2>

        <Row className=" mt-4">
          <Col md={4}>
            <Card className="mb-4 shadow border-0 h-100">
                <div className="date-badge d-flex">
        <div className="day">15</div>
        <div className="month">Oct</div>
      </div>
              <Card.Img variant="top" src="./image/sction11-1.jpg" />
              <Card.Body>
                <Card.Title>World Famous Talented Teachers</Card.Title>
                <Card.Subtitle className="mb-2 text-muted small">
                  <FaClock className="me-2 "color="#2eca7f"  />
                  10:00AM - 12:00PM &nbsp; | &nbsp;
                  <FaMapMarkerAlt className="me-2 "color="#2eca7f" />
                  School of Science
                </Card.Subtitle>
                <Card.Text className="text-muted small">
                  Lorem ipsum is simply dummy text of the printing and typesetting industry...
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="events mb-4 shadow border-0 h-100 ">
                <div className="date-badge d-flex  ">
        <div className="day">18</div>
        <div className="month">Oct</div>
      </div>
              <Card.Img variant="top" src="./image/section11-2.jpg" />
              <Card.Body>
                <Card.Title>Electrical Engineering New Event</Card.Title>
                <Card.Subtitle className="mb-2 text-muted small">
                  <FaClock className="me-2 "color="#2eca7f" />
                  10:00AM - 12:00PM &nbsp; | &nbsp;
                  <FaMapMarkerAlt className="me-2 "color="#2eca7f" />
                  School of Science
                </Card.Subtitle>
                <Card.Text className="text-muted small">
                  Lorem ipsum is simply dummy text of the printing and typesetting industry...
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="mb-4 shadow border-0 h-50">
                <div className="date-badge d-flex">
        <div className="day">15</div>
        <div className="month">Oct</div>
      </div>
      <br />
      <br />
      
              <Card.Body>
                <Card.Title>World Famous Talented Teachers</Card.Title>
                <Card.Subtitle className="mb-2 text-muted small">
                  <FaClock className="me-2 "color="#2eca7f"  />
                  10:00AM - 12:00PM &nbsp; | &nbsp;
                  <FaMapMarkerAlt className="me-2 "color="#2eca7f" />
                  School of Science
                </Card.Subtitle>
                <Card.Text className="text-muted small">
                  Lorem ipsum is simply dummy text of the printing and typesetting industry...
                </Card.Text>
              </Card.Body>

            </Card>


            <Card className="mb-4 shadow border-0 h-50">
                <div className="date-badge d-flex">
        <div className="day">15</div>
        <div className="month">Oct</div>
      </div>
      <br />
      <br />
              <Card.Body>
                <Card.Title>Electrical Engineering new event</Card.Title>
                <Card.Subtitle className="mb-2 text-muted small">
                  <FaClock className="me-2 "color="#2eca7f"  />
                  10:00AM - 12:00PM &nbsp; | &nbsp;
                  <FaMapMarkerAlt className="me-2 "color="#2eca7f" />
                  School of Science
                </Card.Subtitle>
                <Card.Text className="text-muted small">
                  Lorem ipsum is simply dummy text of the printing and typesetting industry...
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>




      
    </section>
  );
}
