import { useAppContext } from '../../../../context/AppContex';
import heart from '../../../../assets/icons/heart-outline.svg';
import './Favorites.css';
function Favorites() {
  const { favourites } = useAppContext();

  return favourites.map((fav) => {
    const { id, images, title } = fav;

    return (
      <div className="favourite-item" key={id}>
        <img
          className="favourite-img"
          src={`${images[0].path}.jpg`}
          alt={title}
        />
        <div className="favourite-item__details">
          <p>{title}</p>
          <button>
            <ion-icon name="heart"></ion-icon>
          </button>
        </div>
      </div>
    );
  });
}

export default Favorites;
