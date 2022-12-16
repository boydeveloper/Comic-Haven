import './News.css';
import { useParams } from 'react-router-dom';
import useFetchComic from '../../hooks/useFetchComic';

function News() {
  const { id } = useParams();
  const { pending, comics: news } = useFetchComic(`events/${id}`);
  if (pending) {
    return <div>loadinggg</div>;
  }
  console.log(news);
  const { thumbnail, title, description } = news[0];
  console.log(thumbnail);

  return (
    <div className="News" key={id}>
      <p>{description}</p>
      <img src={`${thumbnail.path}.jpg`} alt={title} />
    </div>
  );
}

export default News;
