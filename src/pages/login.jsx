// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Login form submitted");

    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token);
      onLogin();
    } else {
      if (data.error === "User not found") {
        alert("User not found. Redirecting to signup...");
        navigate("/signup", { state: { email } }); // Redirect to signup page with email
      } else {
        alert(data.error || "Login failed");
      }
    }
  };

  const handleSignupRedirect = () => {
    navigate("/signup");
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>Login</h1>
        <form className="login-form" onSubmit={handleLogin}>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

          <button type="submit">Login</button>
          <button type="button" className="signup-button" onClick={handleSignupRedirect}>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
