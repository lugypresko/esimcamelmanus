import React, { useState } from 'react';
import './App.css';

const demoProducts = [
  { id: 1, name: 'Global eSIM 5GB', price: 15, description: '5GB data, 30 days validity, works worldwide.' },
  { id: 2, name: 'Europe eSIM 10GB', price: 20, description: '10GB data, 30 days validity, Europe only.' },
  { id: 3, name: 'USA eSIM Unlimited', price: 25, description: 'Unlimited data, 15 days validity, USA only.' },
];

function Ecom({ onViewCart }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <div className="ecom-container">
      <h1 className="ecom-title">eSIMCamel Shop</h1>
      <button className="cart-btn" onClick={() => onViewCart(cart)}>
        🛒 Cart ({cart.length})
      </button>
      <div className="product-list">
        {demoProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div className="product-footer">
              <span className="product-price">${product.price}</span>
              <button onClick={() => addToCart(product)} className="add-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ecom; 