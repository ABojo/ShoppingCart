import styles from '../styles/navStyles.css';

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="nav-heading">Shop Name</h1>
      <div className="nav-items">
        <h1 className="nav-item">Home</h1>
        <h1 className="nav-item">Shop</h1>
        <h1 className="nav-item">About</h1>
      </div>
    </div>
  );
}

export default Navbar;
