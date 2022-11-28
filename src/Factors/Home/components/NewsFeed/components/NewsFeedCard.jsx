import randomImg from '../../../../../assets/imgs/youngJ.png';
function NewsFeedCard({ News }) {
  console.log(News);
  return (
    <>
      {News.map((feed) => {
        console.log(feed);
        return (
          <div className="NewsFeed--box">
            <div className="NewsFeed-imgbox">
              <img src={`${feed.thumbnail.path}.jpg`} alt="young justice" />
            </div>
            <div className="NewsFeed-textbox">
              <span>{feed.title}</span>
              <p>
                {feed.description}
                .....
              </p>
              <a href="#" className="readMore">
                Read more
                <span className="material-symbols-rounded arrow-link">
                  north_east
                </span>
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default NewsFeedCard;
