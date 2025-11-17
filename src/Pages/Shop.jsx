import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <Container>
      <h2 className="text-center my-5">Shop</h2>
      <Row>
        {products.map(product => (
          <Col md={4} key={product.id}>
            <ProductCard
              image={product.image}
              name={product.title}
              price={product.price}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Shop;
