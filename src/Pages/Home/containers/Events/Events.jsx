import './Events.css';
import EventCard from './Components/EventCard/EventCard';
import useFetchComic from '../../../../hooks/useFetchComic';
import EventCardSkelenton from './Components/EventCardSkelenton/EventCardSkelenton';
import { skelentons } from './Utils/utils';

function Events() {
  const { pending, comics: NewsFeed } = useFetchComic('events');
  if (pending) {
    return <EventCardSkelenton skels={skelentons} />;
  }
  const News = NewsFeed.slice(0, 6);
  return (
    <div className="section-News">
      <div className="container">
        <div className="NewsFeed">
          <h1 className="heading-primary">Events</h1>
          <div className="NewsFeed__boxes">
            <EventCard News={News} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
