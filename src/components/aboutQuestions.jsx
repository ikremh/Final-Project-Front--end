import React from 'react';
import { Container, Row, Col, Accordion, Image } from 'react-bootstrap';

function App() {
  const faqData = [
    {
      header : "What does it take excellent author?",
      body: "Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use."
    },
    {
      header: "Who will view my content?",
      body: "Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use."
    },
    {
      header: "What does it take become an author?",
      body: "Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use."
    },
    {
      header: "How to Change my Password easily?",
      body: "Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use."
    },
    {
      header: "How does it create content?",
      body: "Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use."
    },
  ];

  return (
    <Container className="my-5 ">
      <Row className="align-items-center">
        <Col md={6}>
          <p className=" fw-bold mb-2 frequent-asked-question">
            Frequently Asked Question____________
          </p>
          <h2 className="mb-4 general-questions-title">
            General <span className="highlight-text">Questions</span>
          </h2>
          <Accordion defaultActiveKey="0">
            {faqData.map((item, index) => (
              <Accordion.Item className='box-qustion '  key={index} eventKey={index.toString()}>
                <Accordion.Header className='header-title  '>{item.header}</Accordion.Header>
                <Accordion.Body>{item.body}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>

        
        <Col md={5} className="d-flex justify-content-center">
          <div className="">
            <Image 
              src="./image/faq.png" 
              alt="Woman" 
              fluid 
             
              
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;