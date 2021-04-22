import React from 'react';
import styles from '../styles/shopStyles.css';

function Home(props) {
  return (
    <React.Fragment>
      <h1 className="shop-heading">Shop</h1>
      <div className="shop-grid">
        <div className="shop-item">Test Item</div>
        <div className="shop-item">Test Item</div>
        <div className="shop-item">Test Item</div>
        <div className="shop-item">Test Item</div>
        <div className="shop-item">Test Item</div>
        <div className="shop-item">Test Item</div>
        <div className="shop-item">Test Item</div>
        <div className="shop-item">Test Item</div>
      </div>
    </React.Fragment>
  );
}

export default Home;
