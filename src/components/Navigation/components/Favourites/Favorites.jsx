import { useAppContext } from '../../../../context/AppContex';
function Favorites() {
  const { favourites } = useAppContext();
  console.log(favourites);
  return (
    <div className="favorites">
      <div>
        {favourites.map((fav) => {
          return <p>{fav.title}</p>;
        })}
      </div>
    </div>
  );
}

export default Favorites;
