import React from 'react';
import styles from '../styles/shopStyles.css';

function Shop(props) {
  const { products } = props;
  return (
    <React.Fragment>
      <h1 className="shop-heading">Shop</h1>
      <div className="shop-grid">
        {products.map((product) => {
          return (
            <div className="shop-item">
              <img
                className="shop-item__image"
                alt={product.name}
                src={product.image}
              ></img>
              <h1 className="shop-item__name">{product.name}</h1>
              <p className="shop-item__price">${product.price}</p>
              <button className="shop-item__atc">Add To Cart</button>
              <input
                className="shop-item__quantity"
                type="number"
                defaultValue="1"
              />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default Shop;
