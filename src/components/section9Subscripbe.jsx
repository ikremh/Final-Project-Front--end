import React from 'react';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import { FaPaperPlane } from 'react-icons/fa';

const NewsletterForm = () => {
  return (
    <Container className="my-5 text-center">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h2 className="mb-3" style={{ color: '#1a2d62', fontWeight: 'bold', fontSize: '2.5rem' }}>
            Subscribe to our newsletter,<br />
            We don't make any spam.
          </h2>
          <p className="mb-4" style={{ color: '#7F8C8D' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eiusmod tempor enim minim
          </p>
               <div className="email-subscribe">
      <input
        type="email"
        placeholder="Enter Your Email Address"
        className="email-input"
      />
      <button className="email-button">
        <FaPaperPlane color="white" size={25} />
      </button>
    </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsletterForm;