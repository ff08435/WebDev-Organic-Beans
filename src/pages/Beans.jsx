import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Beans.css';

const CoffeeSelection = () => {
  const scrollContainer = useRef(null);
  const sectionRefs = {
    "Organic Ethiopian Beans": useRef(null),
    "Guatemalan Dark Roast": useRef(null),
    "Colombian Decaf": useRef(null),
    "Organic Sumatran Beans": useRef(null),
  };

  const location = useLocation();

  useEffect(() => {
    // Get the search query from the URL
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get("search");

    if (searchQuery) {
      // Find the section that matches the search query
      const matchingSection = Object.keys(sectionRefs).find((name) =>
        name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      // Scroll to the matching section if found
      if (matchingSection && sectionRefs[matchingSection].current) {
        sectionRefs[matchingSection].current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.search]);

  const handleAddToCart = async (item) => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please log in first.");
      window.location.href = "/login"; // Redirect to login page
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ product: item }) // Send product item to the server
      });

      if (response.ok) {
        alert("Item added to cart!");
      } else {
        const data = await response.json();
        alert(data.error || "Failed to add item to cart.");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div ref={scrollContainer} className="scroll-container">
      {/* Coffee Bean #1 */}
      <div ref={sectionRefs["Organic Ethiopian Beans"]} className="scroll-item section-1">
        <div className="coffee-image">
          <img src="/assets/slideshow3.png" alt="Organic Ethiopian Beans" />
        </div>
        <div className="coffee-description">
          <h2>Organic Ethiopian Beans</h2>
          <p>Our Ethiopian beans offer a rich, complex flavor profile with fruity and floral notes.</p>
          <p>Origin: Ethiopia | Roast: Medium | Flavor: Fruity, Floral</p>
          <div className="buttons">
            <button className="btn">Buy Now</button>
            <button
              className="btn"
              onClick={() => handleAddToCart({
                productId: "1",
                name: "Organic Ethiopian Beans",
                price: 15.99
              })}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Coffee Bean #2 */}
      <div ref={sectionRefs["Guatemalan Dark Roast"]} className="scroll-item section-2">
        <div className="coffee-image">
          <img src="/assets/slideshow3.png" alt="Guatemalan Dark Roast" />
        </div>
        <div className="coffee-description">
          <h2>Guatemalan Dark Roast</h2>
          <p>This dark roast Guatemalan coffee is bold and smoky with a hint of cocoa.</p>
          <p>Origin: Guatemala | Roast: Dark | Flavor: Cocoa, Smoky</p>
          <div className="buttons">
            <button className="btn">Buy Now</button>
            <button
              className="btn"
              onClick={() => handleAddToCart({
                productId: "2",
                name: "Guatemalan Dark Roast",
                price: 12.99
              })}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Coffee Bean #3 */}
      <div ref={sectionRefs["Colombian Decaf"]} className="scroll-item section-3">
        <div className="coffee-image">
          <img src="/assets/slideshow3.png" alt="Colombian Decaf" />
        </div>
        <div className="coffee-description">
          <h2>Colombian Decaf</h2>
          <p>Enjoy the full-bodied flavor of Colombian coffee without the caffeine.</p>
          <p>Origin: Colombia | Roast: Medium | Flavor: Rich, Smooth</p>
          <div className="buttons">
            <button className="btn">Buy Now</button>
            <button
              className="btn"
              onClick={() => handleAddToCart({
                productId: "3",
                name: "Colombian Decaf",
                price: 14.99
              })}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Coffee Bean #4 */}
      <div ref={sectionRefs["Organic Sumatran Beans"]} className="scroll-item section-4">
        <div className="coffee-image">
          <img src="/assets/slideshow3.png" alt="Organic Sumatran Beans" />
        </div>
        <div className="coffee-description">
          <h2>Organic Sumatran Beans</h2>
          <p>Known for their earthy, bold flavor, our Sumatran beans offer a full-bodied experience.</p>
          <p>Origin: Sumatra | Roast: Medium-Dark | Flavor: Earthy, Spicy</p>
          <div className="buttons">
            <button className="btn">Buy Now</button>
            <button
              className="btn"
              onClick={() => handleAddToCart({
                productId: "4",
                name: "Organic Sumatran Beans",
                price: 13.99
              })}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeSelection;
