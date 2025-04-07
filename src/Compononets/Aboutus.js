import React from 'react';
import './Aboutus.css';

const Aboutus = () => {
  return (
    <div className="about-container">
      <h1>About Zylo</h1>
      <p>
        <strong>Zylo</strong> is a fictional e-commerce platform built for learning and experimentation. 
        This project uses the <a href="https://fakestoreapi.com/" target="_blank" rel="noopener noreferrer">Fake Store API</a> to simulate product listings, user interactions, and online shopping features.
      </p>
      
      <h2>Why Zylo?</h2>
      <p>
        Zylo was created as part of a study initiative to understand modern web development technologies such as:
      </p>
      <ul>
        <li>React.js for front-end UI</li>
        <li>Redux for state management</li>
        <li>React Router for client-side routing</li>
        <li>Google OAuth for authentication</li>
      </ul>

      <h2>Goals</h2>
      <p>
        The purpose of Zylo is purely educational — to explore full-stack development concepts, understand authentication flows, and practice best practices in React development.
      </p>

      <h2>Disclaimer</h2>
      <p>
        Zylo is not a real store. No actual products are sold here. All product data is sourced from the Fake Store API, which is intended for learning and prototyping only.
      </p>

    </div>
  );
};

export default Aboutus;
