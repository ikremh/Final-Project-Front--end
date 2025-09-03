import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaCheckCircle, FaBook, FaVideo, FaUserGraduate } from "react-icons/fa"; 
import { FiCalendar, FiStar } from "react-icons/fi";
import { TfiLightBulb } from "react-icons/tfi";
import { GrGallery } from "react-icons/gr";
import { LuFlagTriangleLeft } from "react-icons/lu";


export default function PricingSection() {
  const plans = [
    {
      title: "Free",
      price: "$0",
      duration: "Month",
      highlight: "Upgrade as you need",
      features: [
        { text: "Learn at your own pace", icon: <FiCalendar /> },
        { text: "Unlimited downloads", icon: <FaBook /> },
        { text: " Learn at your own pace", icon:<TfiLightBulb /> },
        { text: " Learn at your own pace", icon: <FiStar /> },
         { text: " Learn at your own pace", icon: <GrGallery /> },
        { text: " Learn at your own pace", icon: <LuFlagTriangleLeft />
 },
      ],
    },
    {
      title: "Saver plan",
      price: "$29",
      duration: "Month",
      highlight: "$348 Per Year",
      features: [
            { text: "Learn at your own pace", icon: <FiCalendar /> },
        { text: "Unlimited downloads", icon: <FaBook /> },
        { text: " Learn at your own pace", icon:<TfiLightBulb /> },
        { text: " Learn at your own pace", icon: <FiStar /> },
         { text: " Learn at your own pace", icon: <GrGallery /> },
        { text: " Learn at your own pace", icon: <LuFlagTriangleLeft />}
      ],
    },
    {
      title: "Unlimited plan",
      price: "$49",
      duration: "Month",
      highlight: "$588 Per Year",
      features: [
            { text: "Learn at your own pace", icon: <FiCalendar /> },
        { text: "Unlimited downloads", icon: <FaBook /> },
        { text: " Learn at your own pace", icon:<TfiLightBulb /> },
        { text: " Learn at your own pace", icon: <FiStar /> },
         { text: " Learn at your own pace", icon: <GrGallery /> },
        { text: " Learn at your own pace", icon: <LuFlagTriangleLeft /> },
      ],
    },
  ];

  return (
    <section className="py-5 pricing-section">
      <Container>
        <div className=" mb-5">
          <p className=" fw-bold"style={{ color:"#2eca7f"}}>POPULAR COURSES______________</p>
          <h2 className=" fw-bold" style={{color:"#1a2d62"}}>
            Choose Our <span style={{ color:"#2eca7f"}}>Top Courses</span>
          </h2>
        </div>
        <Row>
          {plans.map((plan, index) => (
            <Col md={4} key={index}>
              <Card className="pricing-card shadow-lg border-0 mb-4 h-100">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="fw-bold " style={{color:"#1a2d62"}}>{plan.title}</h5>
                    <h2 className="fw-bold" style={{color:"#1a2d62"}}>{plan.price}</h2>
                    <p className="text-muted" >{plan.duration}</p>
                    {plan.highlight && (
                      <p className=" fw-semibold"style={{textDecoration:"underline", color:"#2eca7f"}}>{plan.highlight}</p>
                    )}
                    <hr />
                    <ul className="list-unstyled">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="mb-4 d-flex align-items-center text-muted">
                          <span className="me-2 icon-circle" style={{color:"#2eca7f"}}>{feature.icon }</span>
                          {feature.text }
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    style={{ backgroundColor: "#2eca7f", borderColor: "#2eca7f" }}
                    className="w-50 mt-3"
                  >
                    Start Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
