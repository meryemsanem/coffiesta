import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Desserts = () => {
  const [desserts, setDesserts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDesserts = async () => {
      try {
        const response = await axios.get(
          'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert',
        );
        const desserts = response.data.meals.slice(2, 17);
        setDesserts(desserts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dessert data:', error);
      }
    };

    fetchDesserts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div id="desserts" className="desserts">
      <h2>Desserts</h2>
      <ul>
        {desserts.map((dessert) => (
          <li key={dessert.idMeal}>
            <h3 className="dessert-title">{dessert.strMeal}</h3>
            <img src={dessert.strMealThumb} alt={dessert.strMeal} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Desserts;
