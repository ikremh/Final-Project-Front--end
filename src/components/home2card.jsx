import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";


export default function PricingSection() {
  const plans = [
    {
      title: "Free",
      price: "$0",
      duration: "Month",
      highlight: "Upgrade as you need",
      yearly: null,
      features: [
        " Learn at your own pace",
        "Learn at your own pace",
        "Learn at your own pace",
        "Learn at your own pace",
        "Learn at your own pace",
        "Learn at your own pace",
      ],
    },
    {
      title: "Saver plan",
      price: "$29",
      duration: "Month",
      highlight: "$348 Per Year",
      yearly: "$348 Per Year",
      features: [
        "Learn at your own pace",
        "Learn at your own pace",
        "Learn at your own pace",
        "Learn at your own pace",
        "Learn at your own pace",
        "Learn at your own pace",
      ],
    },
    {
      title: "Unlimited plan",
      price: "$49",
      duration: "Month",
      highlight: "$588 Per Year",
      yearly: "$588 Per Year",
      features: [
        "Learn at your own pace",
        "Learn at your own pace",
        "Learn at your own pace",
        "Learn at your own pace",
        "Learn at your own pace",
        "Learn at your own pace",
      ],
    },
  ];

  return (
    <section className="py-5 pricing-section">
      <Container>
        <div className="text- mb-5">
          <p className="text-success fw-bold">POPULAR COURSES</p>
          <h2>
            Choose Our <span className="text-success">Top Courses</span>
          </h2>
        </div>
        <Row>
          {plans.map((plan, index) => (
            <Col md={4} key={index}>
              <Card className="pricing-card shadow-sm mb-4">
                <Card.Body>
                  <h5 className="fw-bold"color="#2eca7f">{plan.title}</h5>
                  <h2 className="fw-bold">{plan.price}</h2>
                  <p className="text-muted">{plan.duration}</p>
                  {plan.highlight && (
                    <p className="text-success fw-semibold">{plan.highlight}</p>
                  )}
                  <hr />
                  <ul className="list-unstyled">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="mb-2">
                        
                        <FaCheckCircle className="text-success me-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="success" className="w-50 " color="#2eca7f">
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
