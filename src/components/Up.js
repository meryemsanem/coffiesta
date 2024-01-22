import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

const Up = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      id="go-up-btn"
      title="Go to top"
      type="button"
      onClick={scrollToTop}
      style={{ display: isVisible ? 'block' : 'none' }}
      aria-label="Go to top"
    >
      <FontAwesomeIcon icon={faAnglesUp} />
    </button>
  );
};

export default Up;
