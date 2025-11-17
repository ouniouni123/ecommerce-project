import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import AdminDashboard from './Pages/AdminDashboard';
import Navbar from './components/Navbar';

const App = () => (
  <Router>
    <Navbar />
    <Container className="mt-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Container>
  </Router>
);

export default App;
