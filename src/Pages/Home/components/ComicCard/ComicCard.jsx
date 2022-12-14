import { Link } from 'react-router-dom';

import './ComicCard.css';
function ComicCard({ comics }) {
  return (
    <>
      {comics.map((comic) => {
        const { id, images, title, prices } = comic;
        let pathProduct = title.replace('#', '').replace(/\s/g, '');
        return (
          <div className="comic-box" key={id}>
            <span className="material-symbols-sharp love-icon">favorite</span>
            <div className="img-box">
              <img src={`${images[0].path}.jpg`} alt={title} />
            </div>
            <div className="text-box">
              <div className="text-box-header">
                <div>
                  <Link to={`/${pathProduct}/${id}`}>{title}</Link>
                </div>
                <span className="price">
                  {prices[0].price === 0 ? 'Free' : '$' + prices[0].price}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ComicCard;
