import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import beanIcon from '../../assets/bean.png'; 
import './Navbar.css';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/beans?search=${searchQuery}`);
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <ul className="navbar-links">
          <li><Link to="/about">About Us</Link></li>  
          <li><Link to="/quiz">Quiz</Link></li>        
          <li><Link to="/beans">Beans</Link></li>
        </ul>
      </div>

      <div className="navbar-center">
        <img src={beanIcon} alt="Bean Icon" className="bean-icon" />
      </div>

      <div className="navbar-right">
        <ul className="navbar-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="navbar-icons">
          {/* Search Form */}
          <form onSubmit={handleSearch} className="search-form">
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">🔍</button>
          </form>
          <Link to="/checkout" onClick={() => console.log("Navigating to Checkout")}>
            <i className="fas fa-shopping-cart"></i> 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
