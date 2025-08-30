import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { IoBookOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { TfiUser, TfiLightBulb } from "react-icons/tfi";
import { TiEyeOutline, TiMail } from "react-icons/ti";

export default function Achievement() {
  const stats = [
    {
      icon: <IoBookOutline size={35} color="#979797ff" />,
      bg: "#d4f7e2",
      title: "Learn and More",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
    },
    {
      icon: <IoMdHeartEmpty size={35} color="#979797ff" />,
      bg: "#d4f7e2",
      title: "Expert Instructor",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
    },
    {
      icon: <TfiUser size={35} color="#979797ff" />,
      bg: "#dbeafe",
      title: "Team Management",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
    },
    {
      icon: <TiEyeOutline size={35} color="#979797ff" />,
      bg: "#d1fae5",
      title: "Student Monitoring",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
    },
    {
      icon: <TfiLightBulb size={35} color="#979797ff" />,
      bg: "#fef3c7",
      title: "Teacher Monitoring",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
    },
    {
      icon: <TiMail size={35} color="#979797ff" />,
      bg: "#e0f2fe",
      title: "24/7 Strong Support",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
    },
  ];

  return (
    <Container id="achievement" className="my-5 py-5">
      <p className="fw-bold text-success">Why Choose Edusion ___________</p>
      <h2
        className="fw-bold mb-5"
        style={{ color: "#1a2d62", fontSize: "2.5rem" }}
      >
        Find the{" "}
        <span
          className="text-decoration-underline"
          style={{ color: "#2eca7f" }}
        >
          best features
        </span>{" "}
        of <br /> Edusion
      </h2>

      <Row>
        {stats.map((item, i) => (
          <Col key={i} md={4} sm={5} className="mb-5">
            <Card className="card-section6 h-100 border-0 shadow-sm p-4 ">
              <div className="d-flex align-items-start">
                <div
                  className="d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "75px",
                    height: "75px",
                    borderRadius: "50%",
                    backgroundColor: item.bg,
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>

                
                <div className="d-flex flex-column"> 
                  <h5 className="fw-bold mb-5 " style={{ color: "#1a2d62" }}>
                    {item.title}
                  </h5>
                  <p className="text-p ">{item.text}</p>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
