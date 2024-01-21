import React from 'react';
import './styles.css';
import offer1 from '../images/offer1.jpeg';
import offer2 from '../images/offer2.jpeg';
import offer3 from '../images/offer3.jpeg';

const Offers = () => {
  const offers = [
    {
      id: 1,
      title: 'Weekend Deal',
      description: 'Weekend offer on selected desserts and coffees.',
      discount: '15% off',
      image: offer1,
    },
    {
      id: 2,
      title: 'Coffee Happy Hour',
      description: 'Every day between 2pm and 4pm.',
      discount: '20% off',
      image: offer2,
    },
    {
      id: 3,
      title: 'Dessert of the Day',
      description: ' Buy any coffee and get 50% off on our dessert of the day.',
      discount: '50% off',
      image: offer3,
    },
  ];

  return (
    <div className="offers" id="offers">
      <h2>Special Offers</h2>
      <div className="offers-container">
        {offers.map((offer) => (
          <div key={offer.id} className="offer-card">
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
            <p className="discount">{offer.discount}</p>
            <img src={offer.image} alt={offer.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
