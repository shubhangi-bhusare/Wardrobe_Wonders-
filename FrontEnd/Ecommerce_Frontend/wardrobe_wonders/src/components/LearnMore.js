import React from 'react';
import '../Style/LearnMore.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

const LearnMore = () => {
  return (
    <Container className="learn-more-container">
      <Row className="justify-content-center text-center">
        <Col md={8}>
          <h2 className="learn-more-title">Welcome to Wardrobe Wonders</h2>
          <p className="learn-more-text">
            At Wardrobe Wonders, we offer a unique selection of fashionable clothing designed to inspire and empower. Our collection includes a wide range of styles that cater to all tastes and preferences.
          </p>
          <p className="learn-more-text">
            Whether you're looking for the latest trends or timeless classics, we've got you covered. Explore our carefully curated collection and discover the perfect outfit for any occasion.
          </p>
          {/* <Button variant="primary" className="learn-more-button">Shop Now</Button> */}
        </Col>
      </Row>
    </Container>
  );
};

export default LearnMore;
