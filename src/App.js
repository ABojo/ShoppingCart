import React, { useState, useEffect } from 'react';
import styles from './styles/baseStyles.css';
import Navbar from './components/Navbar';
import CartSidebar from './components/CartSidebar';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartSidebarShown, setCartSidebarShown] = useState(false);

  const showCartSideBar = () => {
    setCartSidebarShown(true);
  };

  const hideCartSidebar = () => {
    setCartSidebarShown(false);
  };

  return (
    <React.Fragment>
      {cartSidebarShown ? <CartSidebar /> : null}
      <Navbar cartCount={cartCount} showCartSidebar={showCartSideBar} />
    </React.Fragment>
  );
}

export default App;
