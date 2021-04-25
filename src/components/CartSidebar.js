import styles from '../styles/cartSidebarStyles.css';
import { useEffect } from 'react';

function CartSidebar(props) {
  const { hideCartSidebar, cart, cartCount, cartTotal, changeQuantity } = props;

  //For smooth transition off of page
  useEffect(() => {
    const continueShopping = document.querySelector(
      '.cart-sidebar__button.continue'
    );
    const sidebar = document.querySelector('.cart-sidebar');

    continueShopping.addEventListener('click', function () {
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
      <div className="cart-sidebar__info">
        <h1 className="cart-sidebar__title">Your Cart ({cartCount})</h1>
        <h1 className="cart-sidebar__total">${cartTotal.toFixed(2)}</h1>
      </div>
      {cart.map((product) => (
        <div className="cart-sidebar__product" key={product.id}>
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
                onChange={(e) =>
                  changeQuantity(product, parseInt(e.target.value))
                }
              />
            </div>
          </div>
          <h1 className="cart-sidebar__product__total">
            ${product.total.toFixed(2)}
          </h1>
        </div>
      ))}
      {cartCount ? (
        <button className="cart-sidebar__button checkout">Checkout</button>
      ) : (
        ''
      )}
      <button className="cart-sidebar__button continue">
        Continue Shopping
      </button>
    </div>
  );
}

export default CartSidebar;
