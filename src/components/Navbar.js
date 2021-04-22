import styles from '../styles/navStyles.css';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const { cartCount, showCartSidebar } = props;
  const linkStyles = { textDecoration: 'none', color: 'white' };
  return (
    <div className="navbar">
      <h1 className="nav-heading">Shop Name</h1>
      <div className="nav-items">
        <h1 className="nav-item">
          <Link to="/" style={linkStyles}>
            <i className="fas fa-home nav-item__icon"></i>Home
          </Link>
        </h1>
        <h1 className="nav-item">
          <Link to="/shop" style={linkStyles}>
            <i className="fas fa-shopping-bag nav-item__icon"></i>Shop
          </Link>
        </h1>
        <h1 className="nav-item">
          <Link to="/about" style={linkStyles}>
            <i className="fas fa-user  nav-item__icon"></i>About
          </Link>
        </h1>
        <h1 className="nav-cart" onClick={showCartSidebar}>
          <p className="nav-cart__count">{cartCount}</p>
          <i className="fas fa-shopping-cart"></i>
        </h1>
      </div>
    </div>
  );
}

export default Navbar;
