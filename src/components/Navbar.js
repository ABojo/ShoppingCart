import styles from '../styles/navStyles.css';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const { cartCount, showCartSidebar } = props;
  const linkStyles = { textDecoration: 'none', color: 'white' };

  return (
    <div className="navbar">
      <h1 className="nav-heading">Shop Name</h1>
      <div className="nav-items">
        <Link to="/" style={linkStyles}>
          <h1 className="nav-item">
            <i className="fas fa-home nav-item__icon"></i>Home
          </h1>
        </Link>

        <Link to="/shop" style={linkStyles}>
          <h1 className="nav-item">
            <i className="fas fa-shopping-bag nav-item__icon"></i>Shop
          </h1>
        </Link>

        <h1 className="nav-cart" onClick={showCartSidebar}>
          {cartCount ? <p className="nav-cart__count">{cartCount}</p> : ''}
          <i className="fas fa-shopping-cart"></i>
        </h1>
      </div>
    </div>
  );
}

export default Navbar;
