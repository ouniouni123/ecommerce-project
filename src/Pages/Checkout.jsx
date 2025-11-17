import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Checkout = () => {
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order submitted:', customer);
  };

  return (
    <Container>
      <h2>Checkout</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={customer.name} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={customer.email} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" name="address" value={customer.address} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="tel" name="phone" value={customer.phone} onChange={handleChange} required />
        </Form.Group>
        <Button variant="primary" type="submit">Confirm Order</Button>
      </Form>
    </Container>
  );
};

export default Checkout;
