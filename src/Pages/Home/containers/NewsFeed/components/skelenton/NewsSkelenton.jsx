import './NewsSkelenton.css';
function NewsSkelenton({ skels }) {
  return (
    <div className="section-News">
      <div className="container">
        <div className="NewsFeed">
          <h1 className="heading-primary">News Feed</h1>
          <div className="NewsFeed__boxes">
            {skels.map((skel) => {
              return (
                <div className="News-skelenton">
                  <div className="img-skelenton"></div>
                  <div className="skel-textbox">
                    <h1></h1>
                    <p></p>
                    <span></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsSkelenton;
