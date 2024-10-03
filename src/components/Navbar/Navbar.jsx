import React from 'react';
import { Link } from 'react-router-dom';  // Use Link from React Router for proper navigation
import beanIcon from '../../assets/bean.png';  // Use correct path to bean icon
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <ul className="navbar-links">
          <li><Link to="/about">About Us</Link></li>  {/* Use Link instead of a href */}
          <li><Link to="/quiz">Quiz</Link></li>        {/* Use Link for other pages */}
          <li><Link to="/beans">Beans</Link></li>
        </ul>
      </div>

      <div className="navbar-center">
        <img src={beanIcon} alt="Bean Icon" className="bean-icon" />
      </div>

      <div className="navbar-right">
        <ul className="navbar-links">
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="navbar-icons">
          <Link to="/search"><i className="fas fa-search"></i></Link>  {/* Link to search */}
          <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>  {/* Link to cart */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
