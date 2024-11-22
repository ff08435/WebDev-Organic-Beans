import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Slideshow from "./components/Slideshow/Slideshow";
import AboutBox from "./components/AboutBox/AboutBox";
import CartSidebar from "./components/CartSidebar/CartSidebar"; // Correct path for CartSidebar

// Pages
import About from "./pages/About";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import Beans from "./pages/Beans";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import Quiz from "./pages/Quiz";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cartItems, setCartItems] = useState([]); // State for cart items
  const [isCartOpen, setIsCartOpen] = useState(false); // State for cart sidebar visibility

  // Check for authentication on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsAuthenticated(true);
  }, []);

  // Handle login
  const handleLogin = () => setIsAuthenticated(true);

  // Handle adding items to cart
  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Handle clearing the cart
  const handleClearCart = () => setCartItems([]);

  // Handle updating item quantity
  const handleUpdateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  return (
    <Router>
      <div className="app">
        {/* Navbar visible on all pages, passes toggleCartSidebar to open the cart */}
        <Navbar onCartClick={() => setIsCartOpen(true)} />

        {/* CartSidebar controlled by isCartOpen state */}
        <CartSidebar
          cartItems={cartItems}
          onClearCart={handleClearCart}
          onUpdateQuantity={handleUpdateQuantity}
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)} // Close cart sidebar
        />

        <Routes>
          {isAuthenticated ? (
            // Authenticated routes
            <>
              <Route
                path="/"
                element={
                  <div className="content">
                    <Slideshow />
                    <AboutBox />
                  </div>
                }
              />
              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/beans"
                element={<Beans onAddToCart={handleAddToCart} />}
              />
              <Route
                path="/checkout"
                element={<Checkout cartItems={cartItems} />}
              />
              <Route path="/quiz" element={<Quiz />} />

              {/* Redirect login and signup to home for authenticated users */}
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
