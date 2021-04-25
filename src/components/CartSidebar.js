import styles from '../styles/cartSidebarStyles.css';
import { useEffect } from 'react';

function CartSidebar(props) {
  const { hideCartSidebar, cart, cartCount } = props;

  //For smooth transition off of page
  useEffect(() => {
    const sidebarClose = document.querySelector('.cart-sidebar__close');
    const sidebar = document.querySelector('.cart-sidebar');

    sidebarClose.addEventListener('click', function () {
      //Starts animation
      sidebar.classList.add('hidden');
      //Hides bar upon completion of the animation
      sidebar.addEventListener('animationend', hideCartSidebar);
    });

    return () => {
      sidebar.removeEventListener('animationend', hideCartSidebar);
    };
  }, []);

  return (
    <div className="cart-sidebar">
      <h1 className="cart-sidebar__close">
        <i className="fas fa-times"></i>
      </h1>
      <div className="cart-sidebar__info">
        <h1 className="cart-sidebar__title">Your Cart ({cartCount})</h1>
        <h1 className="cart-sidebar__total">$200.29</h1>
      </div>
      {cart.map((product) => (
        <div className="cart-sidebar__product">
          <div className="cart-sidebar__product-main">
            <img
              className="cart-sidebar__product__image"
              src={product.image}
              alt={product.name}
            ></img>
            <div>
              <h1 className="cart-sidebar__product__name">{product.name}</h1>
              <input
                className="cart-sidebar__product__quantity"
                type="number"
                value={product.quantity}
                min="1"
              />
            </div>
          </div>
          <h1 className="cart-sidebar__product__total">${product.total}</h1>
        </div>
      ))}
      {cartCount ? (
        <button className="cart-sidebar__checkout">Checkout</button>
      ) : (
        ''
      )}
    </div>
  );
}

export default CartSidebar;
