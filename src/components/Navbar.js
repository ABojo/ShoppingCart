import styles from '../styles/navStyles.css';

function Navbar(props) {
  const { cartCount, showCartSidebar } = props;
  return (
    <div className="navbar">
      <h1 className="nav-heading">Shop Name</h1>
      <div className="nav-items">
        <h1 className="nav-item">
          <i className="fas fa-home nav-item__icon"></i>Home
        </h1>
        <h1 className="nav-item">
          <i className="fas fa-shopping-bag nav-item__icon"></i>Shop
        </h1>
        <h1 className="nav-item">
          <i className="fas fa-user  nav-item__icon"></i>About
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
