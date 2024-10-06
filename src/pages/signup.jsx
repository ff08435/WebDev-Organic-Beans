// src/pages/Signup.jsx
import './Signup.css';
import signupIcon from '../pages/contactIcon.png'; 

import React, { useState } from 'react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="signup-page">
      <h1>Create Your Account</h1>
      <p>
        Join our community of coffee lovers today! Fill out the form below to get started.
      </p>

      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          //placeholder="Enter your name"
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          //placeholder="Enter your email"
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          //placeholder="Create a password"
          required
        />

        <button type="submit" className="signup-button">Sign Up</button>
      </form>

      <div className="signup-icon-container">
        <img src={signupIcon} alt="Signup Icon" className="signup-icon" />
      </div>
    </div>
  );
};

export default Signup;
