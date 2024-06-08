import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/Footer.css';

function Footer() {
    return (
      <footer>
        <Container>
          <Row>
            <Col md={3}>
            <h4>Products</h4>
            <ul>
              <li>Heavy Duty</li>
              <li>Industrial</li>
              <li>Transport</li>
            </ul>
            </Col>
            <Col md={3}>
            <h4>Company</h4>
            </Col>
            <Col md={3}>
            <h4>Social Media</h4>
            </Col>
            <Col md={3}>
            <h4>Ecoguard Filter Trading LLC</h4>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
  

export default Footer;
