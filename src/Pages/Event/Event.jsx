import './Event.css';
import { useParams } from 'react-router-dom';
import useFetchComic from '../../hooks/useFetchComic';
import EventContainer from './Containers/EventContainer';
import EventSkelenton from './components/eventSkelenton';

function Event() {
  const { id } = useParams();
  const { pending, comics: news } = useFetchComic(`events/${id}`);
  if (pending) {
    return <EventContainer children={<EventSkelenton />} />;
  }

  const { thumbnail, title, description } = news[0];

  return (
    <div className="News" key={id}>
      <p>{description}</p>
      <img src={`${thumbnail.path}.jpg`} alt={title} />
    </div>
  );
}

export default Event;
