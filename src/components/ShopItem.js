import React, { useState, useEffect } from 'react';
import styles from '../styles/shopStyles.css';

function ShopItem(props) {
  const { product, addToCart } = props;
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="shop-item">
      <img
        className="shop-item__image"
        alt={product.name}
        src={product.image}
      ></img>
      <h1 className="shop-item__name">{product.name}</h1>
      <p className="shop-item__price">${product.price}</p>
      <button
        className="shop-item__atc"
        onClick={() => addToCart(product, quantity)}
      >
        Add To Cart
      </button>
      <input
        className="shop-item__quantity"
        type="number"
        value={quantity}
        min="1"
        onChange={(e) => setQuantity(e.target.value)}
      />
    </div>
  );
}

export default ShopItem;
