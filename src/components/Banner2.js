import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/Banner2.css';

const Banner2 = () => {
  return (
    <div className="banner2">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img
              src="/assets/image1.png"
              alt="Image1"
              className="img-fluid"
            />
          </Col>
          <Col md={6}>
            <div className="banner-text">
              <h1>Welcome to Our Website</h1>
              <p>Your success is our commitment. Join us today to start your journey!</p>
              <Button variant="primary">Get Started</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner2;
