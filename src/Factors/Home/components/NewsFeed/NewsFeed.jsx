import './NewsFeed.css';

import NewsFeedCard from './components/NewsFeedCard';

import useFetchComic from '../../../../hooks/useFetchComic';
function NewsFeed() {
  const { pending, comics: NewsFeed } = useFetchComic('events');
  if (pending) {
    return <div>loadinggg</div>;
  }
  const News = NewsFeed.slice(0, 6);
  console.log(News);
  return (
    <div className="section-News">
      <div className="container">
        <div className="NewsFeed">
          <h1 className="heading-primary">News Feed</h1>
          <div className="NewsFeed__boxes">
            <NewsFeedCard News={News} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsFeed;
