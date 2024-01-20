import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import coffeeShop from '../images/coffee-bar.jpg';
import coffeeImage1 from '../images/coffee1.png';
import coffeeImage2 from '../images/coffee2.jpeg';
import coffeeImage3 from '../images/coffee3.avif';
import coffeeImage4 from '../images/coffee4.jpeg';
import coffeeImage6 from '../images/coffee6.jpeg';

import './styles.css';

const Homepage = () => {
  const coffeeImages = [
    coffeeShop,
    coffeeImage1,
    coffeeImage2,
    coffeeImage3,
    coffeeImage4,
    coffeeImage6,
  ];
  const [currentImage, setCurrentImage] = useState(0);

  const showNextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex === coffeeImages.length - 1 ? 0 : prevIndex + 1));
  };

  const showPrevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex === 0 ? coffeeImages.length - 1 : prevIndex - 1));
  };

  return (
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
        <img src={coffeeImages[currentImage]} alt="Coffee" />
      </div>

      <div className="nav-buttons">
        <button
          type="button"
          onClick={showPrevImage}
          aria-label="Previous Image"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button type="button" onClick={showNextImage} aria-label="Next Image">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
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
};

export default Homepage;
