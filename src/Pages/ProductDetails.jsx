import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ProductDetails = () => (
  <Container>
    <Row>
      <Col md={6}>
        <img src="product-image.jpg" alt="Product" className="img-fluid" />
      </Col>
      <Col md={6}>
        <h3>Product Name</h3>
        <p>$20.00</p>
        <p>Product description goes here...</p>
        <Button variant="primary">Add to Cart</Button>
      </Col>
    </Row>
  </Container>
);

export default ProductDetails;
