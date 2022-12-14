import './CartItemCheckout.css';
function CartItemCheckout({ items }) {
  return (
    <>
      {items.map((item) => {
        const { prices, title, images, quantity } = item;
        return (
          <div className="checkout-item">
            <img src={`${images[0].path}.jpg`} alt={title} />
            <p>{item.title}</p>
            <div className="tag">{quantity}</div>
            <p className="price">
              {prices[0].price === 0 ? 'Free' : '$' + prices[0].price}
            </p>
          </div>
        );
      })}
    </>
  );
}

export default CartItemCheckout;
