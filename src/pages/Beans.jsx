
import React, { useRef, useEffect } from 'react';
import './Beans.css';  

const CoffeeSelection = () => {
  const scrollContainer = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        scrollContainer.current.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
      } else if (event.key === 'ArrowLeft') {
        scrollContainer.current.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div ref={scrollContainer} className="scroll-container">
      {/* Coffee Bean #1 */}
      <div className="scroll-item section-1">
        <div className="coffee-image">
          <img src="/assets/slideshow3.png" alt="Organic Ethiopian Beans" />  
        </div>
        <div className="coffee-description">
          <h2>Organic Ethiopian Beans</h2>
          <p>Our Ethiopian beans offer a rich, complex flavor profile with fruity and floral notes. Sourced directly from sustainable farms in the highlands of Ethiopia.</p>
          <p>Origin: Ethiopia | Roast: Medium | Flavor: Fruity, Floral</p>
          <div className="buttons">
            <button className="btn">Buy Now</button>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
      </div>

    
      <div className="scroll-item section-2">
        <div className="coffee-image">
          <img src="/assets/slideshow3.png" alt="Guatemalan Dark Roast" />  
        </div>
        <div className="coffee-description">
          <h2>Guatemalan Dark Roast</h2>
          <p>This dark roast Guatemalan coffee is bold and smoky with a hint of cocoa. Perfect for those who love rich and intense flavors.</p>
          <p>Origin: Guatemala | Roast: Dark | Flavor: Cocoa, Smoky</p>
          <div className="buttons">
            <button className="btn">Buy Now</button>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="scroll-item section-3">
        <div className="coffee-image">
          <img src="/assets/slideshow3.png" alt="Colombian Decaf" />  
        </div>
        <div className="coffee-description">
          <h2>Colombian Decaf</h2>
          <p>Enjoy the full-bodied flavor of Colombian coffee without the caffeine. Our decaf option retains the rich, smooth taste that makes Colombian beans famous.</p>
          <p>Origin: Colombia | Roast: Medium | Flavor: Rich, Smooth</p>
          <div className="buttons">
            <button className="btn">Buy Now</button>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
      </div>

     
      <div className="scroll-item section-4">
        <div className="coffee-image">
          <img src="/assets/slideshow3.png" alt="Organic Sumatran Beans" />  
        </div>
        <div className="coffee-description">
          <h2>Organic Sumatran Beans</h2>
          <p>Known for their earthy, bold flavor, our Sumatran beans offer a full-bodied experience with a hint of spice and a smooth finish.</p>
          <p>Origin: Sumatra | Roast: Medium-Dark | Flavor: Earthy, Spicy</p>
          <div className="buttons">
            <button className="btn">Buy Now</button>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeSelection;
