import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styles from './styles/baseStyles.css';
import Home from './components/Home';
import Shop from './components/Shop';
import Navbar from './components/Navbar';
import CartSidebar from './components/CartSidebar';
import productList from './utils/products';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartSidebarShown, setCartSidebarShown] = useState(false);
  const [products, setProducts] = useState(productList);

  const showCartSideBar = () => {
    setCartSidebarShown(true);
  };

  const hideCartSidebar = () => {
    setCartSidebarShown(false);
  };

  return (
    <React.Fragment>
      <BrowserRouter>
        {cartSidebarShown ? (
          <CartSidebar hideCartSidebar={hideCartSidebar} />
        ) : null}
        <Navbar cartCount={cartCount} showCartSidebar={showCartSideBar} />
        <div className="main-content">
          <Switch>
            <Route exact path="/shop" component={Shop} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
