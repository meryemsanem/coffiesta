import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import coffeeShop from '../images/coffee-bar.jpg';
import './styles.css';

const Homepage = () => (
  <div className="homepage" id="homepage">
    <h1>
      Welcome
      <br />
      to
      <br />
      <div>
        <span>COF</span>
        <span>FIESTA!</span>
      </div>
    </h1>
    <p>Discover the finest coffee and desserts.</p>

    <div className="coffee-img">
      <img src={coffeeShop} alt="Coffee" />
    </div>
    <div className="social-links">
      <h3>Follow us on social media</h3>
      <div className="social-link-icons">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  </div>
);

export default Homepage;
