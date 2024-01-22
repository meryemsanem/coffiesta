import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Coffees = () => {
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoffees = async () => {
      try {
        const response = await axios.get(
          'https://api.sampleapis.com/coffee/hot',
        );
        setCoffees(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching coffees:', error);
      }
    };

    fetchCoffees();
  }, []);

  if (loading) {
    return <p className="loading">Loading please wait...</p>;
  }

  return (
    <div id="coffees" className="coffees">
      <h2>Coffees</h2>
      <ul>
        {coffees.slice(0, 15).map((coffee) => (
          <li key={coffee.id}>
            <h3 className="coffee-title">{coffee.title}</h3>
            {' '}
            <img src={coffee.image} alt={coffee.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Coffees;
