import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';  
import Slideshow from './components/Slideshow/Slideshow';  
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AboutBox from './components/AboutBox/AboutBox';  
import About from './pages/About';  
import Signup from './pages/signup';
import Contact from './pages/contact';
import Beans from './pages/Beans';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import Quiz from './pages/Quiz';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogin = () => setIsAuthenticated(true);

  // Check for authentication on mount
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) setIsAuthenticated(true);
  // }, []);

  //const handleLogin = () => setIsAuthenticated(true);

  return (
    <Router>
      <div className="app">
        <Navbar />  
        <Routes>
          {isAuthenticated ? (
            // Authenticated routes
            <>
              <Route path="/" element={
                <div className="content">
                  <Slideshow />  
                  <AboutBox />  
                </div>
              } />
              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path="/about" element={<About />} />  
              <Route path="/contact" element={<Contact />} /> 
              <Route path="/beans" element={<Beans />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/quiz" element={<Quiz />} />


              {/* Redirect to home if user tries to access login or signup while authenticated */}
              <Route path="/login" element={<Navigate to="/" replace />} />
              <Route path="/signup" element={<Navigate to="/" replace />} />
            </>
          ) : (
            // Unauthenticated routes
            <>
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/signup" element={<Signup />} />
              {/* Redirect any other route to login */}
              <Route path="*" element={<Navigate to="/login" replace />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
