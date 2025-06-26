import React from 'react';
import './App.css';

function Cart({ cart, onRemove, onCheckout, onBack }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <button className="back-btn" onClick={onBack}>Back to Shop</button>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item, idx) => (
              <li key={idx} className="cart-item">
                <span>{item.name} - ${item.price}</span>
                <button className="remove-btn" onClick={() => onRemove(idx)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="cart-total">Total: ${total}</div>
          <button className="checkout-btn" onClick={onCheckout}>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
}

export default Cart; 