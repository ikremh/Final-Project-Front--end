import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function ContactForm() {
  return (
    <section className="py-5 contact-form ">
      <Container>
        <h2 className="text-center fw-bold mb-5 ">
          Send your message.
        </h2>
        <Form className="w-75 mx-auto">
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label className="fw-semibold ">Name</Form.Label>
                <Form.Control type="text"  />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label className="fw-semibold ">Your Email</Form.Label>
                <Form.Control type="email"  />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold ">Your Subject</Form.Label>
            <Form.Control type="text"  />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="fw-semibol ">Your Message</Form.Label>
            <Form.Control className="textarea" as="textarea" rows={5}  />
          </Form.Group>

          <div className="text-center">
            <Button
              type="submit"
              className="px-4 py-2 rounded-pill"
              style={{ backgroundColor: "#2eca7f", border: "none" }}
            >
              Send Message
            </Button>
          </div>
        </Form>
      </Container>
    </section>
  );
}
