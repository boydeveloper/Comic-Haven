import './Explore.css';
import useFetchComic from '../../../../hooks/useFetchComic';
import ExploreContainer from './Containers/ExploreContainer';
import { ComicCard, SkelentonCard } from '../../components/Routes/index';
import { skelentons } from './Utils/utils';
function Explore() {
  const { pending, comics } = useFetchComic('comics');
  if (pending) {
    return <ExploreContainer children={<SkelentonCard skels={skelentons} />} />;
  }
  let exploreComics = [];
  exploreComics = exploreComics.concat(
    comics.slice(9, 15),
    comics.slice(16, 20)
  );
  return <ExploreContainer children={<ComicCard comics={exploreComics} />} />;
}
export default Explore;
