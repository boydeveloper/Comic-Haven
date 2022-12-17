import './Featured.css';
import useFetchComic from '../../../../hooks/useFetchComic';
import { ComicCard, SkelentonCard } from '../../components/Routes/index';
import { skelentons } from '../Explore/Utils/utils';
import FeaturedContainer from './Containers/FeaturedContainer';
function Featured() {
  const { pending, comics } = useFetchComic('comics');
  if (pending) {
    return (
      <FeaturedContainer children={<SkelentonCard skels={skelentons} />} />
    );
  }
  const featuredComics = comics.slice(2, 8);
  return <FeaturedContainer children={<ComicCard comics={featuredComics} />} />;
}

export default Featured;
