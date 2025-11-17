import React from 'react';
import { Carousel, Button, Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';  // Import ProductCard

const Home = () => (
  <div>
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="https://via.placeholder.com/1200x400" alt="First slide" />
        <Carousel.Caption>
          <h3>Product Highlight 1</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://via.placeholder.com/1200x400" alt="Second slide" />
        <Carousel.Caption>
          <h3>Product Highlight 2</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Container className="my-5">
      <h2 className="text-center mb-4">Popular Products</h2>
      <Row>
        <Col md={4}>
          <ProductCard image="https://via.placeholder.com/250" name="Product 1" price="25.00" />
        </Col>
        <Col md={4}>
          <ProductCard image="https://via.placeholder.com/250" name="Product 2" price="30.00" />
        </Col>
        <Col md={4}>
          <ProductCard image="https://via.placeholder.com/250" name="Product 3" price="35.00" />
        </Col>
      </Row>
      <Button variant="primary" className="d-block mx-auto mt-4">See More</Button>
    </Container>
  </div>
);

export default Home;
