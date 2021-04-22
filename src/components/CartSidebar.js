import styles from '../styles/cartSidebarStyles.css';
import { useEffect } from 'react';

function CartSidebar(props) {
  const { hideCartSidebar } = props;

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
    </div>
  );
}

export default CartSidebar;
