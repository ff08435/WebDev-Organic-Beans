import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import beanIcon from "../../assets/bean.png";
import "./Navbar.css";

const Navbar = ({ onCartClick }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/beans?search=${searchQuery}`);
    } else {
      alert("Please enter a search term."); // Notify user if search is empty
    }
  };

  return (
    <nav className="navbar">
      {/* Hamburger Menu Button */}
      <button
        className="hamburger-menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* Left Section */}
      <div className={`navbar-left ${isMenuOpen ? "open" : ""}`}>
        <ul className="navbar-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/quiz">Quiz</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
  
      {/* Center Logo */}
      <div className="navbar-center">
        <img src={beanIcon} alt="Bean Icon" className="bean-icon" />
      </div>
  
      {/* Right Section */}
      <div className={`navbar-right ${isMenuOpen ? "open" : ""}`}>
        <ul className="navbar-links">
          <li><Link to="/beans">Beans</Link></li>
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
          {/* Cart Icon */}
          <button className="cart-icon" onClick={onCartClick}>
            <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
