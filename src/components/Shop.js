import React, { useState, useEffect } from 'react';
import styles from '../styles/shopStyles.css';
import ShopItem from './ShopItem';

function Shop(props) {
  const { products, addToCart } = props;

  return (
    <React.Fragment>
      <h1 className="shop-heading">Shop</h1>
      <div className="shop-grid">
        {products.map((product) => (
          <ShopItem product={product} addToCart={addToCart} />
        ))}
      </div>
    </React.Fragment>
  );
}

export default Shop;
