// src/ThemeComponent.js

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ThemeComponent = () => {
  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1 className="text-primary">Welcome to My Bootstrap Theme</h1>
          <p>This is a simple theme using React and Bootstrap.</p>
          <Button variant="primary">Click Me</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ThemeComponent;
