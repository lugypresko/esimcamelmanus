import React from 'react';
import './App.css';

function Checkout({ cart, onBack }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <button className="back-btn" onClick={onBack}>Back to Cart</button>
      <ul className="checkout-list">
        {cart.map((item, idx) => (
          <li key={idx}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <div className="checkout-total">Total: ${total}</div>
      <div className="stripe-placeholder">
        <p>Stripe payment integration coming soon.</p>
      </div>
    </div>
  );
}

export default Checkout; 