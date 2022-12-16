import './quotes.css';
import QuoteImg from '../../../../assets/imgs/batPeek.jpg';
function Quotes() {
  return (
    <section className="section-quotes">
      <div className="container">
        <div className="Quotes">
          <h3>
            "You Either Die A Hero Or Live Long Enough To See Yourself Become
            The Villain." - The dark Knight
          </h3>

          <img src={QuoteImg} alt="batman" />
        </div>
      </div>
    </section>
  );
}

export default Quotes;
