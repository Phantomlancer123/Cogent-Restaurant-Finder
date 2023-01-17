import React, { useEffect, useState } from 'react';
import { searchRestaurants } from '../../utils';
import RestaurantCard from '../../components/RestaurantCard';
import SearchBar from '../../components/SearchBar';
import { HomeCompoenet } from './index.style';
import { CardModel } from '../../models';

type DataType = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  contexts: object,
  results: CardModel[]
};

const HomePage = () => {
  // const [searchWord, setSearchWord] = useState<string>('');
  const [randomData, setRandomData] = useState<CardModel>();

  const getData = async () => {
    const data: DataType = await searchRestaurants('restaurant');
    const { results } = data;
    setRandomData(results[Math.floor(Math.random() * results.length)]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <SearchBar />

      <HomeCompoenet>
        Random Restaurant
        {' '}
        {randomData && <RestaurantCard data={randomData} />}
        {/* <CardsList /> */}
      </HomeCompoenet>
    </>
  );
};

export default HomePage;
