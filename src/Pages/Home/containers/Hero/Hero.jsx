import './Hero.css';
import { useAppContext } from '../../../../context/AppContex';
import coverI from '../../../../assets/imgs/comiccover.webp';
import coverII from '../../../../assets/imgs/superman.jpg';
import coverIII from '../../../../assets/imgs/flash.jpg';

function Hero() {
  const { handleSmooth } = useAppContext();
  return (
    <div className="section-hero">
      <div className="container">
        <div className="hero">
          <div className="hero__overview">
            <div className="hero__overview--left">
              <h1 className="hero-heading">
                Enter the world of comics at Comic Haven
              </h1>
              <p className="hero-summary">
                Comic Haven is an online and operated comic book store located
                in Westeros. We offer a wide selection of comics, graphic
                novels, and collectibles for fans of all ages. Our knowledgeable
                and friendly staff are always happy to help you find the perfect
                comic or collectible, and we offer personalized recommendations
                to help you discover new and exciting titles. In addition to our
                extensive collection of comics and graphic novels, we also host
                regular in-store events such as book signings with popular comic
                authors, artist meet-and-greets, and workshops on comic
                creation. We are proud to support local artists and creators,
                and we regularly showcase their work in our store. At Comic
                Haven, we believe that comics are for everyone, and we strive to
                create a welcoming and inclusive environment for all of our
                customers.
              </p>
              <button onClick={() => handleSmooth()} className="hero-btn">
                Explore
              </button>
            </div>
            <div className="hero__overview--right">
              <img src={coverIII} alt="comic cover-01" />
              <img src={coverII} alt="comic cover-02" />
              <img src={coverI} alt="comic cover-03" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
