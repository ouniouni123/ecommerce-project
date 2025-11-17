import React, { useState } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';

const Cart = () => {
  const [cart, _setCart] = useState([
    { id: 1, name: 'Product 1', price: 20, quantity: 1 },
    { id: 2, name: 'Product 2', price: 30, quantity: 1 },
  ]);

  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <Container>
      <h2>Shopping Cart</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.quantity}</td>
              <td>${product.price * product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h4>Total: ${totalPrice}</h4>
      <Button variant="primary">Proceed to Checkout</Button>
    </Container>
  );
};

export default Cart;
