// src/pages/About.js
import './About.css';
import coffeeAbout from '../pages/aboutmebeans.png';  // Use correct path to bean icon

import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <h1>About Organic Beans</h1>
      <p>
        Our story began with the simple idea of providing the highest quality organically sourced
        coffee beans. From humble beginnings, we’ve grown to deliver premium beans to coffee lovers
        worldwide. Learn more about our values, our process, and how we’re committed to sustainable
        and ethical sourcing.
      </p>
      <p>
        We believe in sustainability, supporting local farmers, and ensuring that every bean
        is ethically sourced. Our mission is to make every cup of coffee a delightful and
        guilt-free experience.
      </p>
      <div className="navbar-center">
        <img src={coffeeAbout} alt="coffee About" className="coffee-about" />
      </div>
    </div>

    
  );
};

export default About;
