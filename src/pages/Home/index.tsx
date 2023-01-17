import React, { useEffect } from 'react';
import { searchRestaurants, getRestaurantDetail } from '../../utils';

const HomePage = () => {
  useEffect(() => {
    const data = searchRestaurants('');
    console.log(data);
  }, []);
  return (
    <div>HomePage</div>
  );
};

export default HomePage;
