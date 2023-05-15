import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContex';
import CartBag from '../../assets/icons/bag-outline.svg';
import LikeIcon from '../../assets/icons/like.svg';
import CartContainer from './containers/CartContainer/CartContainer';
import Favorites from './components/Favourites/Favorites';
import './Navigation.css';

function Navigation() {
  const [OpenCart, setOpenCart] = useState(false);
  const [favorites, setFavorites] = useState(null);
  const { totalQuantities, favoritesNum } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setOpenCart(false);
  }, [location]);

  function HandleOpenFavourites() {
    setOpenCart(true);
    setFavorites(true);
  }

  function HandleOpenCart() {
    setOpenCart(true);
    setFavorites(false);
  }

  return (
    <div className={OpenCart ? 'header open' : 'header'}>
      <div className="Navigation">
        <div
          className="Navigation-overlay"
          onClick={() => setOpenCart(false)}
        ></div>
        <div className="Navigation__brand" onClick={() => navigate('/')}>
          Comic Haven
        </div>

        <div className="Navigation__icons">
          <button onClick={HandleOpenFavourites}>
            <img src={LikeIcon} alt="like icon" />
            <span className="favorite-count">{favoritesNum}</span>
          </button>
          <button onClick={HandleOpenCart}>
            <img src={CartBag} alt="cart bag" />
            <span className="cart-count">{totalQuantities}</span>
          </button>
        </div>
        <CartContainer favourites={favorites} />
      </div>
    </div>
  );
}

export default Navigation;
