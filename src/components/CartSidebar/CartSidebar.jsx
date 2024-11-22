import React from "react";
import { useNavigate } from "react-router-dom";
import "./CartSidebar.css";

const CartSidebar = ({ cartItems, onClearCart, onUpdateQuantity, isOpen, onClose }) => {
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
      </div>
      <div className="cart-content">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="cart-items">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p>Price: Rs. {item.price}</p>
                  <div className="quantity-control">
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <p>Subtotal: Rs. {(item.price * item.quantity).toFixed(2)}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="cart-footer">
        <h3>Total: Rs. {calculateTotal()}</h3>
        <button className="checkout-btn" onClick={() => navigate("/checkout")}>
          Checkout
        </button>
        <button className="clear-cart-btn" onClick={onClearCart}>
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartSidebar;
