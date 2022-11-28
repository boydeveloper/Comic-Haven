import './Featured.css';
import useFetchComic from '../../../../hooks/useFetchComic';
import ComicCard from '../ComicCard/ComicCard';
function Featured() {
  const { pending, comics } = useFetchComic('comics');
  if (pending) {
    return <div>loading.........</div>;
  }
  const featuredComics = comics.slice(4, 10);
  return (
    <div className="section-featured">
      <div className="container">
        <div className="featured">
          <h1 className="heading-primary">Featured</h1>
          <div className="featured__boxes">
            <ComicCard comics={featuredComics} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
