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
    if (!isNaN(quantity) && quantity > 0) {
      addToCart(product, quantity);
      notify(true, `Added ${product.name} (${quantity}) to your cart`);
    } else {
      notify(false, 'The quantity must be a number greater than one!');
    }
  };

  const changeQuantity = (product, newQuantity) => {
    const newCart = [...cart];
    const index = newCart.findIndex((item) => item.id === product.id);

    if (newQuantity === 0 || isNaN(newQuantity)) {
      newCart.splice(index, 1);
    } else {
      newCart[index].quantity = newQuantity;
      newCart[index].total = newQuantity * newCart[index].price;
    }

    setCart(newCart);
  };

  useEffect(() => {
    setCartCount(cart.reduce((acc, cv) => acc + cv.quantity, 0));
  }, [cart]);

  useEffect(() => {
    setCartTotal(cart.reduce((acc, cv) => acc + cv.total, 0));
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
            changeQuantity={changeQuantity}
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
