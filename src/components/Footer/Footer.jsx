import { Link } from 'react-router-dom';
import './footer.css';
function Footer() {
  return (
    <footer className="section-footer">
      <div className="container">
        <div className="footer">
          <span className="footer__copyright">
            © Darkrr.comics.com. All Rights Reserved.
          </span>
          <div className="footer__socials">
            <a href="http://twitter.com/_danielvx">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="http://github.com/boydeveloper">
              <ion-icon name="logo-github"></ion-icon>
            </a>
            <a
              href="#
            "
            >
              <ion-icon name="mail"></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
