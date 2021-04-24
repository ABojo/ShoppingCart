import React from 'react';
import styles from '../styles/shopStyles.css';
import FireRed from '../img/firered.jpg';
import halo from '../img/halo.png';
import bo2 from '../img/bo2.jpg';
import ssb from '../img/ssb.jpg';

function Home(props) {
  return (
    <React.Fragment>
      <h1 className="shop-heading">Shop</h1>

      <div className="shop-grid">
        <div className="shop-item">
          <img
            className="shop-item__image"
            alt={'fire red'}
            src={FireRed}
          ></img>
          <h1 className="shop-item__name">Pokemon Fire Red</h1>
          <p className="shop-item__price">$29.99</p>
          <button className="shop-item__atc">Add To Cart</button>
          <input
            className="shop-item__quantity"
            type="number"
            defaultValue="1"
          />
        </div>
        <div className="shop-item">
          <img className="shop-item__image" alt={'halo'} src={halo}></img>
          <h1 className="shop-item__name">Halo Infinite</h1>
          <p className="shop-item__price">$69.99</p>
          <button className="shop-item__atc">Add To Cart</button>
          <input
            className="shop-item__quantity"
            type="number"
            defaultValue="1"
          />
        </div>
        <div className="shop-item">
          <img className="shop-item__image" alt={'fire red'} src={bo2}></img>
          <h1 className="shop-item__name">CoD: Black Ops 2</h1>
          <p className="shop-item__price">$59.99</p>
          <button className="shop-item__atc">Add To Cart</button>
          <input
            className="shop-item__quantity"
            type="number"
            defaultValue="1"
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
