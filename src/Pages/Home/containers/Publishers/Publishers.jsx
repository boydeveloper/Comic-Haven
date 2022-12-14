import './Publishers.css';
import dcLogo from '../../../../assets/imgs/dc.png';
import marvelLogo from '../../../../assets/imgs/marvel.png';
import vertigoLogo from '../../../../assets/imgs/vertigo.webp';
import idwLogo from '../../../../assets/imgs/idw.webp';
import darkHorseLogo from '../../../../assets/imgs/darkHorse.png';

function Publishers() {
  return (
    <section className="section-publishers">
      <div className="container">
        <h1 className="heading-primary">Publishers</h1>
      </div>
      <div className="publishers">
        <div className="container">
          <div className="publishers__logos">
            <div className="publishers-imgI">
              <img src={dcLogo} alt="Marvel logo" />
            </div>
            <div className="publishers-imgII">
              <img src={marvelLogo} alt="Marvel logo" />
            </div>
            <div className="publishers-imgIII">
              <img src={vertigoLogo} alt="DC logo" />
            </div>
            <div className="publishers-imgIII">
              <img src={idwLogo} alt="IDW logo" />
            </div>
            <div className="publishers-imgIII">
              <img src={darkHorseLogo} alt="dark horse logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Publishers;
