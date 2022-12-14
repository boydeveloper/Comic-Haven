import './Skelenton.css';
function Skelenton({ skels }) {
  return (
    <>
      {skels.map((skel, i) => {
        return (
          <div className="comic-skelenton" key={i}>
            <div className="img-box-conc">
              <div className="img-conc"></div>
            </div>
            <div className="text-box">
              <p></p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Skelenton;
