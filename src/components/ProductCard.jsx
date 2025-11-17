import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 18rem;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }

  .card-img-top {
    object-fit: cover;
    height: 250px;
  }

  .card-body {
    background-color: #f8f9fa;
    padding: 1.5rem;
  }

  .card-title {
    font-size: 1.25rem;
    font-weight: bold;
  }

  .card-text {
    font-size: 1rem;
    color: #6c757d;
  }

  button {
    background-color: #007bff;
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    font-size: 1rem;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const ProductCard = ({ image, name, price }) => (
  <CardWrapper>
    <img className="card-img-top" src={image} alt="product" />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">${price}</p>
      <Button variant="primary">Add to Cart</Button>
    </div>
  </CardWrapper>
);

export default ProductCard;
