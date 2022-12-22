import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContex';
import appleLogo from '../../assets/icons/logo-apple.svg';
import arrowBack from '../../assets/icons/arr-back.svg';
import CartItemCheckout from './components/CartItemCheckout/CartItemCheckout';
import './Checkout.css';
function Checkout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const navigate = useNavigate();
  const { totalPrice, cartItems } = useAppContext();

  return (
    <section className="checkout-section">
      <div className="checkout__overview">
        <div className="checkout__overview--left">
          <span className="back-text" onClick={() => navigate('/')}>
            <img src={arrowBack} alt="arrow back" />
            Continue Shopping
          </span>
          <button className="checkout-btn">
            <img src={appleLogo} alt="apple logo" className="apple-logo" />
            <p>Pay</p>
          </button>
          <div className="or">or</div>

          <form className="checkout-form" action="#">
            <div className="input-group">
              <label htmlFor="email">Email address</label>
              <input type="email" id="email" />
            </div>
            <div className="input-group">
              <label htmlFor="name">Name on card</label>
              <input type="text" id="name" />
            </div>
            <div className="input-group">
              <label htmlFor="card-no">Card number</label>
              <input type="email" id="card-no" />
            </div>
            <div className="input-groups">
              <div className="input-group">
                <label htmlFor="expiring">Expiration date (MM/YY)</label>
                <input type="text" id="expiring" />
              </div>
              <div className="input-group">
                <label htmlFor="address">cvc</label>
                <input type="text" id="CVC" />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" />
            </div>
            <div className="input-groups">
              <div className="input-group">
                <label htmlFor="address">City</label>
                <input type="text" id="City" />
              </div>

              <div className="input-group">
                <label htmlFor="state">State</label>
                <input type="text" id="state" />
              </div>
              <div className="input-group">
                <label htmlFor="code">Postal code</label>
                <input type="text" id="code" />
              </div>
            </div>

            <div className="flex">
              <input type="checkbox" name="checkbox" id="checkbox" />
              <label htmlFor="checkbox">
                Billing address is the same as shipping address
              </label>
            </div>
            <button type="button" className="pay-btn">
              pay ${totalPrice.toFixed(2)}
            </button>
          </form>
        </div>
        <div className="checkout__overview--right">
          <div className="checkout-header">
            <h1 className="card-heading">Amount due</h1>
            <div className="totality">${totalPrice.toFixed(2)}</div>
          </div>
          <CartItemCheckout items={cartItems} />
          <div className="checkout-details"></div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
