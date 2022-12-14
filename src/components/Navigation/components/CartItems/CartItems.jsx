import './CartItems.css';
import minusIcon from '../../../../assets/icons/minus.svg';
import addIcon from '../../../../assets/icons/add.svg';
import { useAppContext } from '../../../../context/AppContex';

function CartItems({ items }) {
  const { toggleCartComicQuantity, deleteComicItem } = useAppContext();
  return items.map((item) => {
    const { id, images, title, prices, quantity } = item;

    return (
      <div className="cartItem" key={item.id}>
        <img src={`${images[0].path}.jpg`} className="item-img" alt={title} />
        <div className="item">
          <div className="item-name">{title}</div>

          <div className="counter">
            <span onClick={() => toggleCartComicQuantity(id, 'red')}>
              <img src={minusIcon} alt="minus icon" />
            </span>
            <span>{quantity}</span>
            <span onClick={() => toggleCartComicQuantity(id, 'inc')}>
              <img src={addIcon} alt="add icon" />
            </span>
          </div>
        </div>
        <div className="item">
          <div className="item-price">
            {prices[0].price === 0 ? 'Free' : '$' + prices[0].price}
          </div>
          <p className="delete" onClick={() => deleteComicItem(item)}>
            delete
          </p>
        </div>
      </div>
    );
  });
}

export default CartItems;
