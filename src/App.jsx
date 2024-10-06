import React from 'react';
import Navbar from './components/Navbar/Navbar';  
import Slideshow from './components/Slideshow/Slideshow';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutBox from './components/AboutBox/AboutBox';  
import About from './pages/About';  
import Signup from './pages/signup';
import Contact from './pages/contact';
import Beans from './pages/Beans'; 

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />  
          <Routes>
          
          <Route path="/" element={
            <div className="content">
              <Slideshow />  
              <AboutBox />  
            </div>
          } />
          {/* about page */}
          <Route path="/about" element={<About />} />  
          {/* signup */}
          <Route path="/signup" element={<Signup />} />  
          {/* contact page */}
          <Route path="/contact" element={<Contact />} /> 

          <Route path="/Beans" element={<Beans />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
