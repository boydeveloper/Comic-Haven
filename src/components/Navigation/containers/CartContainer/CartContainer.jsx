import { useAppContext } from '../../../../context/AppContex';
import Favorites from '../../components/Favourites/Favorites';
import { useNavigate } from 'react-router-dom';
import './CartContainer.css';
import CartItems from '../../components/CartItems/CartItems';
import CloseIcon from '../../../../assets/icons/closeicon.svg';
import BagIcon from '../../../../assets/icons/bag-outline.svg';

function CartContainer({ favourites }) {
  const { cartItems, totalPrice, handleSmooth } = useAppContext();
  const navigate = useNavigate();

  return (
    <div className="Cart-Navigation">
      <div className="cart-header">
        <button className="close-btn">
          <img src={CloseIcon} alt="close icon" />
        </button>
        <span className="cart-heading">
          {favourites ? 'Favorites' : 'Cart'}
        </span>
      </div>
      {favourites === true ? (
        <Favorites />
      ) : cartItems.length < 1 ? (
        <div className="empty-cart">
          <img src={BagIcon} alt="Bag icon" />
          <p>
            Your cart is currently empty.To make a purchase, please add items to
            your cart.
          </p>
        </div>
      ) : (
        <div>
          <CartItems items={cartItems} />
          <div className="cart-Navigation-cta">
            <div className="subtotal">
              <span className="subtotal-txt">Subtotal</span>
              <span className="subtotal-txt">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="Navigation-btns">
              <button onClick={() => navigate('/checkout')}>Checkout</button>
              <button
                onClick={() => {
                  navigate('/');
                  handleSmooth();
                }}
              >
                continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartContainer;
