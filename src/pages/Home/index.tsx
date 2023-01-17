import React, { useEffect } from 'react';
import { searchRestaurants } from '../../utils';
import CardsList from '../../components/CardsList';
import { HomeCompoenet } from './index.style';

type DataType = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  contexts: object,
  // eslint-disable-next-line @typescript-eslint/ban-types
  results: object[]
};

const HomePage = () => {
  let randomData;
  const getData = async () => {
    const data: DataType = await searchRestaurants('');
    const { results } = data;
    randomData = results[Math.floor(Math.random() * results.length)];
    console.log(randomData);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <HomeCompoenet>
      {/* <RestaurantCard data={randomData} /> */}
      <CardsList />
    </HomeCompoenet>
  );
};

export default HomePage;
