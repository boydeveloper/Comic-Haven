import { Link } from 'react-router-dom';
import './NewsFeedCard.css';
function NewsFeedCard({ News }) {
  return (
    <>
      {News.map((feed) => {
        const {
          id,
          title,
          thumbnail: { path },
          description,
        } = feed;
        const shortDescription = description.slice(0, 60);
        return (
          <div className="NewsFeed--box" key={id}>
            <div className="NewsFeed-imgbox">
              <img src={`${path}.jpg`} alt={title} />
            </div>
            <div className="NewsFeed-textbox">
              <span>{title}</span>
              <p>{shortDescription} ......</p>
              <Link to={`news/${id}`} className="readMore">
                Read more
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default NewsFeedCard;
