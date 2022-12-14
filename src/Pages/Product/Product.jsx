import './Product.css';
import { useParams } from 'react-router-dom';
import ProductContainer from './Containers/ProductContainer';
import LikeIcon from '../../assets/icons/like.svg';
import useFetchComic from '../../hooks/useFetchComic';
import { useAppContext } from '../../context/AppContex';
import { noConentText, splitText } from './utils/utils';
import Skelenton from './components/Skelenton/Skelenton';
function Product() {
  const { id } = useParams();
  const { atc } = useAppContext();
  const { pending, comics: comic } = useFetchComic(`comics/${id}`);
  if (pending) {
    return <ProductContainer children={<Skelenton />} />;
  }
  const { images, title, prices, description } = comic[0];
  const shortDesc = splitText(description);

  return (
    <ProductContainer
      children={
        <>
          <div className="product__overview--left">
            <img src={`${images[0].path}.jpg`} alt={title} />
            {pending && 'heeee'}
          </div>
          <div className="product__overview--right">
            <div className="desc-header">
              <h1 className="desc-heading">{title}</h1>
              <span className="product-price">
                {prices[0].price === 0 ? 'Free' : '$' + prices[0].price}
              </span>
            </div>
            <p className="product-desc">
              {shortDesc === '' ? noConentText : shortDesc}
            </p>
            <div className="product-cta">
              <button className="atc-btn" onClick={() => atc(comic[0], 1)}>
                Add to cart
              </button>
              <button className="like-btn">
                <img src={LikeIcon} alt="like icon" />
              </button>
            </div>
          </div>
        </>
      }
    />
  );
}

export default Product;
