import './ComicCard.css';
function ComicCard({ comics }) {
  return (
    <>
      {comics.map((comic) => {
        return (
          <div className="comic-box" key={comic.id}>
            <span className="material-symbols-sharp">favorite</span>
            <div className="img-box">
              <img src={`${comic.images[0].path}.jpg`} alt="Young justice" />
            </div>
            <div className="text-box">
              <div className="text-box-header">
                <div>
                  <a href="#">
                    {comic.title}
                    <span className="material-symbols-rounded">north_east</span>
                  </a>
                </div>
                <span className="price">
                  {comic.prices[0].price === 0
                    ? 'Free'
                    : '$' + comic.prices[0].price}
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
