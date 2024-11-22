import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Beans.css";

const CoffeeSelection = () => {
  const scrollContainer = useRef(null); // Ref for scroll container
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ]; // Refs for each section

  const location = useLocation();

  // Scroll to a specific section based on the query parameter
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const coffeeName = params.get("name"); // Get the name from the query parameter

    if (coffeeName) {
      const sectionIndex = getSectionIndexByName(coffeeName); // Find the corresponding section index
      if (sectionIndex !== -1) {
        sectionRefs[sectionIndex].current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  }, [location.search]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      const currentScrollPosition = scrollContainer.current.scrollLeft;
      const containerWidth = scrollContainer.current.offsetWidth;

      if (e.key === "ArrowRight") {
        // Scroll to the next section
        scrollContainer.current.scrollTo({
          left: currentScrollPosition + containerWidth,
          behavior: "smooth",
        });
      } else if (e.key === "ArrowLeft") {
        // Scroll to the previous section
        scrollContainer.current.scrollTo({
          left: currentScrollPosition - containerWidth,
          behavior: "smooth",
        });
      }
    };

    // Add event listener for keydown
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Map coffee names to section indices
  const getSectionIndexByName = (name) => {
    const coffeeNames = [
      "Organic Ethiopian Beans",
      "Guatemalan Dark Roast",
      "Colombian Decaf",
      "Organic Sumatran Beans",
    ];
    return coffeeNames.indexOf(name);
  };

  return (
    <div ref={scrollContainer} className="scroll-container">
      {/* Coffee Bean #1 */}
      <div ref={sectionRefs[0]} className="scroll-item section-1">
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
              onClick={() =>
                handleAddToCart({
                  productId: "1",
                  name: "Organic Ethiopian Beans",
                  price: 15.99,
                })
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Coffee Bean #2 */}
      <div ref={sectionRefs[1]} className="scroll-item section-2">
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
              onClick={() =>
                handleAddToCart({
                  productId: "2",
                  name: "Guatemalan Dark Roast",
                  price: 12.99,
                })
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Coffee Bean #3 */}
      <div ref={sectionRefs[2]} className="scroll-item section-3">
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
              onClick={() =>
                handleAddToCart({
                  productId: "3",
                  name: "Colombian Decaf",
                  price: 14.99,
                })
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Coffee Bean #4 */}
      <div ref={sectionRefs[3]} className="scroll-item section-4">
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
              onClick={() =>
                handleAddToCart({
                  productId: "4",
                  name: "Organic Sumatran Beans",
                  price: 13.99,
                })
              }
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
