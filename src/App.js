import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styles from './styles/baseStyles.css';
import Home from './components/Home';
import Shop from './components/Shop';
import Navbar from './components/Navbar';
import CartSidebar from './components/CartSidebar';
import productList from './utils/products';
import notify from './utils/notify';

function App() {
  const [cartSidebarShown, setCartSidebarShown] = useState(false);
  const [products] = useState(productList);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const showCartSideBar = () => {
    setCartSidebarShown(true);
  };

  const hideCartSidebar = () => {
    setCartSidebarShown(false);
  };

  const addToCart = (product, quantity) => {
    const newCart = [...cart];
    const productIndex = newCart.findIndex((item) => item.id === product.id);

    if (productIndex > -1) {
      newCart[productIndex].quantity += quantity;
      newCart[productIndex].total += quantity * newCart[productIndex].price;
    } else {
      newCart.push({
        ...product,
        quantity: quantity,
        total: quantity * product.price,
      });
    }

    setCart(newCart);
  };

  const addToCartAndNotify = (product, quantity) => {
    addToCart(product, quantity);
    notify(`Added ${product.name} (${quantity}) to your cart`);
  };

  useEffect(() => {
    if (cart.length > 0) {
      let acc = 0;
      cart.forEach((el) => (acc += el.quantity));
      setCartCount(acc);
    }
  }, [cart]);

  useEffect(() => {
    if (cart.length > 0) {
      let acc = 0;
      cart.forEach((el) => (acc += el.total));
      setCartTotal(acc);
    }
  }, [cart]);

  return (
    <React.Fragment>
      <BrowserRouter>
        {cartSidebarShown ? (
          <CartSidebar
            hideCartSidebar={hideCartSidebar}
            cart={cart}
            cartCount={cartCount}
            cartTotal={cartTotal}
          />
        ) : null}
        <Navbar cartCount={cartCount} showCartSidebar={showCartSideBar} />
        <div className="main-content">
          <Switch>
            <Route
              exact
              path="/shop"
              render={() => (
                <Shop products={products} addToCart={addToCartAndNotify} />
              )}
            />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
