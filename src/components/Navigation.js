import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles.css';

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);
  const toggleMenu = (event) => {
    if (event.type === 'click' || event.key === 'Enter' || event.key === ' ') {
      setIsMobile(!isMobile);
    }
  };
  return (
    <nav className="navigation">
      <div className="navigation_logo">
        <Link to="/">Coffiesta</Link>
      </div>
      <ul
        className={isMobile ? 'navigation_list show' : 'navigation_list hide'}
      >
        <li className="navigation_item">
          <Link to="/coffees">Coffees</Link>
        </li>
        <li className="navigation_item">
          <Link to="/desserts">Desserts</Link>
        </li>
        <li className="navigation_item">
          <Link to="/offers">Offers</Link>
        </li>
        <li className="navigation_item">
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      <button
        className="navigation_toggle"
        onClick={toggleMenu}
        onKeyDown={toggleMenu}
        type="button"
        aria-label="Toggle navigation"
      >
        <i className={isMobile ? 'fas fa-times' : 'fas fa-bars'} />
      </button>
    </nav>
  );
};

export default Navigation;
