import React, { useState, useEffect } from 'react';
import styles from './styles/baseStyles.css';
import Navbar from './components/Navbar';

function App() {
  const [cartCount, setCartCount] = useState(0);

  return <Navbar cartCount={cartCount} />;
}

export default App;
