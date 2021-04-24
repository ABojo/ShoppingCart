import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styles from './styles/baseStyles.css';
import Home from './components/Home';
import Shop from './components/Shop';
import Navbar from './components/Navbar';
import CartSidebar from './components/CartSidebar';
import productList from './utils/products';

function App() {
  const [cartSidebarShown, setCartSidebarShown] = useState(false);
  const [products, setProducts] = useState(productList);
  const [cart, setCart] = useState([]);

  const showCartSideBar = () => {
    setCartSidebarShown(true);
  };

  const hideCartSidebar = () => {
    setCartSidebarShown(false);
  };

  const addToCart = (product, quantity) => {
    const newCart = [...cart];
    const productIndex = newCart.findIndex(
      (item) => item.name === product.name
    );

    if (productIndex > -1) {
      newCart[productIndex].quantity += parseInt(quantity);
    } else {
      newCart.push({ ...product, quantity: parseInt(quantity) });
    }

    setCart(newCart);
    console.log(cart);
  };

  return (
    <React.Fragment>
      <BrowserRouter>
        {cartSidebarShown ? (
          <CartSidebar hideCartSidebar={hideCartSidebar} />
        ) : null}
        <Navbar cartCount={cart.length} showCartSidebar={showCartSideBar} />
        <div className="main-content">
          <Switch>
            <Route
              exact
              path="/shop"
              render={() => <Shop products={products} addToCart={addToCart} />}
            />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
