import CartIcon from '../../../../assets/icons/cart.svg';
import LikeIcon from '../../../../assets/icons/like.svg';
import '../../index.css';
function Navbar() {
  return (
    <div className="Navigation">
      <div className="Navigation__brand">Darkrr♦️</div>

      <div className="Navigation__icons">
        <button>
          <img src={LikeIcon} alt="Like icon" />
          <p>:0</p>
        </button>
        <button>
          <img src={CartIcon} alt="Cart Icon" />
          :0
        </button>
      </div>
    </div>
  );
}

export default Navbar;
