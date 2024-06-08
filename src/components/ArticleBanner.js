import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/ArticleBanner.css';

const ArticleBanner = () => {
  return (
    <div className="article-banner">
      <Container>
        <Row>
          <Col lg={6} md={12} className="mb-4">
            <Card>
            <Card.Img variant="top" src="/assets/article1.png" alt="Article 1" />
              <Card.Body>
                <Card.Title>Article Title 1</Card.Title>
                <Card.Text>
                  This is a brief description of the first article. It gives a summary of the content.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12} className="mb-4">
            <Card>
            <Card.Img variant="top" src="/assets/article2.png" alt="Article 2" />
              <Card.Body>
                <Card.Title>Article Title 2</Card.Title>
                <Card.Text>
                  This is a brief description of the second article. It gives a summary of the content.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
                </Row>
      </Container>
    </div>
  );
};

export default ArticleBanner;
