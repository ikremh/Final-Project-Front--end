import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
const topics = [
  {
    title: 'Business',
    courses: 1  ,
    icon: <img src="../public/image/ct5.svg" alt="Business" style={{ width: '50px', height: '55px',  }} />
  },
  {
    title: 'Data Science',
    courses: 1,
    icon: <img src="../public/image/ct6.svg" alt="Data Science" style={{ width: '50px', height: '55px', color: '#3498DB' }} />
  },
  {
    title: 'Digital Program',
    courses: 2,
    icon: <img src="../public/image/ct2.svg" alt="Digital Program" style={{ width: '55px', height: '55px', color: '#E74C3C' }} />
  },
  {
    title: 'Finance',
    courses: 2,
    icon: <img src="../public/image/ct3.svg" alt="Finance" style={{ width: '40px', height: '55px', color: '#F39C12' }} />
  },
  {
    title: 'Modern Physics',
    courses: 3,
    icon: <img src="../public/image/ct4.svg" alt="Modern Physics" style={{ width: '55px', height: '55px', color: '#9B59B6' }} />
  },
  {
    title: 'UI/UX Design',
    courses: 3,
    icon: <img src="../public/image/ct1.svg" alt="UI/UX Design" style={{ width: '55px', height: '55px', color: '#9B59B6' }} />
  }
];

const TopicsSection = () => {
  return (
    <Container className="my-5">
      <div className="text-right mb-5">
        <h6 className="text-uppercase" style={{ color: '#2ECC71', letterSpacing: '2px', fontSize: '0.8rem'  }}>
          Start Learning______________
        </h6>
        <h2 className="display-4" style={{ fontWeight: 'bold', fontSize: '2.5rem', color: '#1a2d62' }}>
          Popular <span style={{ color: '#2ECC71', textDecoration: 'underline' }}>Topics To Learn</span> From Today.
        </h2>
      </div>
      <Row className="g-4 justify-content-center">
        {topics.map((topic, index) => (
          <Col key={index} xs={12} sm={6} md={4}>
            <Card className="h-100 p-4 shadow-sm" style={{ borderRadius: '15px', border: 'none' }}>
              <div className="d-flex align-items-center mb-3">
                <div style={{ marginRight: '15px' }}>
                  {topic.icon}
                </div>
                <div>
                  <h5 className="mb-2" style={{ fontWeight: '600' }}>{topic.title}</h5>
                  <p className="mb-2" style={{ color: '#2eca7f' }}>{topic.courses} Courses</p>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TopicsSection;