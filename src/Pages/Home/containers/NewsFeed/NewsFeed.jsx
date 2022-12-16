import './NewsFeed.css';
import NewsFeedCard from './components/card/NewsFeedCard';
import useFetchComic from '../../../../hooks/useFetchComic';
import NewsSkelenton from './components/skelenton/NewsSkelenton';
import { skelentons } from './utils/skelentonArray';

function NewsFeed() {
  const { pending, comics: NewsFeed } = useFetchComic('events');
  if (pending) {
    return <NewsSkelenton skels={skelentons} />;
  }
  const News = NewsFeed.slice(0, 6);
  return (
    <div className="section-News">
      <div className="container">
        <div className="NewsFeed">
          <h1 className="heading-primary">Events</h1>
          <div className="NewsFeed__boxes">
            <NewsFeedCard News={News} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsFeed;
