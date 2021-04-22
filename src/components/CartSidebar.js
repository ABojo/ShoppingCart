import styles from '../styles/cartSidebarStyles.css';
import { useEffect } from 'react';

function CartSidebar(props) {
  const { hideCartSidebar } = props;

  //Adds event listeners so the slide away animation can complete before hiding the sidebar
  useEffect(() => {
    const sidebarClose = document.querySelector('.cart-sidebar__close');
    const sidebar = document.querySelector('.cart-sidebar');

    sidebarClose.addEventListener('click', function () {
      sidebar.classList.add('hidden');
      sidebar.addEventListener('animationend', function () {
        hideCartSidebar();
      });
    });
  }, []);

  return (
    <div className="cart-sidebar">
      <h1 className="cart-sidebar__close">
        <i className="fas fa-times"></i>
      </h1>
    </div>
  );
}

export default CartSidebar;
