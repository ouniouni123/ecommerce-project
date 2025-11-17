import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Global styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
