import React from 'react';
import Navbar from './components/Navbar/Navbar';  // Import Navbar
import Slideshow from './components/Slideshow/Slideshow';  // Import Slideshow
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutBox from './components/AboutBox/AboutBox';  // Import AboutBox component
import About from './pages/About';  // Import full About page

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />  {/* Navbar at the top */}

        <Routes>
          {/* Main page with Slideshow and AboutBox */}
          <Route path="/" element={
            <div className="content">
              <Slideshow />  {/* Add the Slideshow component */}
              <AboutBox />  {/* Add the AboutBox component */}
            </div>
          } />

          {/* Full About page */}
          <Route path="/about" element={<About />} />  {/* Full About page route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
