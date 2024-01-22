import React from 'react';
import './styles.css';
import logo from '../images/logo.jpg';

const Contact = () => (
  <div>
    <div className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-title">
          <h2>Contact Us</h2>
        </div>
        <div className="logo">
          <img src={logo} alt="Coffiesta Logo" />
        </div>
        <div className="info-coffiesta">
          <p className="text-contact">
            Coffiesta-Your ultimate destination for delightful coffee and
            desserts! At Coffiesta, our mission is to provide the highest
            quality beverages and treats, all within a warm and welcoming
            atmosphere.
          </p>
          <p className="contact-address">123 Coffee Street, Coffiesta</p>
          <p className="contact-address">info@coffiesta.com</p>
          <p className="contact-address">+1 (123) 456-7890</p>
        </div>
      </div>
    </div>
    <footer className="footer">
      <p>&copy; 2024 Coffiesta. All rights reserved.</p>
    </footer>
  </div>
);

export default Contact;
