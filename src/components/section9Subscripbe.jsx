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
          <Form>
            <InputGroup className="mb-4">
              <Form.Control
                type="email"
                placeholder="Enter Your Email Address"
                aria-label="Email Address"
                style={{ 
                    borderRadius: '50px 50px 50px 50px', 
                     }}
              />
              <Button 
                variant="success " 
                id="button-addon2" 
                style={{ backgroundColor: '#2d995aff',  margin: '0 5px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50px', height: '50px', border: 'none', 
                    borderRadius: '50%' }}
              >
                <FaPaperPlane />
              </Button>
            </InputGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsletterForm;