// src/pages/Signup.jsx
import './Signup.css';
import signupIcon from '../pages/contactIcon.png'; 

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      // Parse response data
      const data = await response.json();

      if (response.ok) {
        alert("Signup successful");
        navigate("/"); // Navigate to home page on success
      } else {
        alert(data.error || "Signup failed");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Network error: Unable to reach the server");
    }
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
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
