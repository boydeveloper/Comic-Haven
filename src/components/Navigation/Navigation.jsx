import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContex';
import CartBag from '../../assets/icons/bag-outline.svg';
import LikeIcon from '../../assets/icons/like.svg';
import CartContainer from './containers/CartContainer/CartContainer';
import './Navigation.css';

function Navigation() {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { totalQuantities } = useAppContext();
  useEffect(() => {
    setNavOpen(false);
  }, [location]);

  return (
    <div className={navOpen ? 'header open' : 'header'}>
      <div className="Navigation">
        <div
          className="Navigation-overlay"
          onClick={() => setNavOpen(false)}
        ></div>
        <div className="Navigation__brand" onClick={() => navigate('/')}>
          Comic Haven
        </div>

        <div className="Navigation__icons">
          <img src={LikeIcon} alt="like icon" />
          <button onClick={() => setNavOpen(true)}>
            <img src={CartBag} alt="cart bag" />
            <span>{totalQuantities}</span>
          </button>
        </div>
        <CartContainer />
      </div>
    </div>
  );
}

export default Navigation;
