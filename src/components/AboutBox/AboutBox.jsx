import React from 'react';
import { Link } from 'react-router-dom';
import './AboutBox.css';

const AboutBox = () => {
  return (
    <div className="about-box">
      <h2>About Organic Beans</h2>
      <p>
        We are passionate about providing the best organically sourced coffee beans. With a focus
        on sustainability and quality, we ensure that every cup of coffee you brew has the perfect
        balance of flavor and freshness...
      </p>
      {/* Link to About page */}
      <Link to="/about">
        <button className="read-more-button">Read More</button>
      </Link>
    </div>
  );
};

export default AboutBox;
