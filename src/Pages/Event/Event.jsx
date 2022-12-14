import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetchComic from '../../hooks/useFetchComic';
import EventContainer from './Containers/EventContainer';
import EventSkelenton from './components/EventSkelenton';
import './Event.css';

function Event() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
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
