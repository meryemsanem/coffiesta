import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles.css';

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleBodyScroll = () => {
      document.body.style.overflow = isMobile ? 'hidden' : 'auto';
    };

    handleBodyScroll(); 


    window.addEventListener('scroll', handleBodyScroll);

    return () => {
      window.removeEventListener('scroll', handleBodyScroll);
    };
  }, [isMobile]);

  const closeMenu = () => setIsMobile(false);

  const toggleMenu = (event) => {
    if (event.type === 'click' || event.key === 'Enter' || event.key === ' ') {
      setIsMobile(!isMobile);
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <div className="wrapper">
      <nav className="navigation">
        <div className="navigation_logo">
          <Link to="/">Coffiesta</Link>
        </div>
        <ul
          className={isMobile ? 'navigation_list show' : 'navigation_list hide'}
        >
          <li className="navigation_item">
            <Link to="/" onClick={() => scrollToSection('homepage')}>
              Home
            </Link>
          </li>
          <li className="navigation_item">
            <Link to="/coffees" onClick={() => scrollToSection('coffees')}>
              Coffees
            </Link>
          </li>
          <li className="navigation_item">
            <Link to="/desserts" onClick={() => scrollToSection('desserts')}>
              Desserts
            </Link>
          </li>
          <li className="navigation_item">
            <Link to="/offers" onClick={() => scrollToSection('offers')}>
              Offers
            </Link>
          </li>
          <li className="navigation_item">
            <Link to="/order" onClick={() => scrollToSection('order')}>
              Order
            </Link>
          </li>
          <li className="navigation_item">
            <Link to="/contact" onClick={() => scrollToSection('contact')}>
              Contact Us
            </Link>
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
    </div>
  );
};

export default Navigation;
