import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AdminDashboard = () => (
  <Container>
    <h2>Admin Dashboard</h2>
    <Row>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Products</Card.Title>
            <Card.Text>100</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Orders</Card.Title>
            <Card.Text>50</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Categories</Card.Title>
            <Card.Text>10</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default AdminDashboard;
