import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';

import { searchRestaurants } from '../../utils';
import CardsList from '../../components/CardsList';
import RestaurantCard from '../../components/RestaurantCard';
import SearchBar from '../../components/SearchBar';
import Map from '../../components/Map';

import { CardModel } from '../../models';

type DataType = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  contexts: object,
  results: CardModel[]
};

const HomeCompoenet = styled('div')({
  display: 'grid',
  justifyContent: 'center',
  color: 'white',
  fontSize: '30px',
  fontFamily: 'cursive',
});

const TitleWrapper = styled('div')({
  marginTop: '80px',
  marginBottom: '50px',
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  transform: 'skew(0,-10deg)',
});

const MapView = styled('div')({
  position: 'fixed',
  right: '50px',
  bottom: '0px',
  zIndex: '99',
});

const SweetTitle = styled('h1')({
  order: '2',
  color: '#fde9ff',
  fontWeight: '900',
  textTransform: 'uppercase',
  fontSize: 'clamp(3rem, 10vw, 6rem)',
  lineHeight: '0.75em',
  textAlign: 'center',
  textShadow: '3px 1px 1px #4af7ff, 2px 2px 1px #165bfb, 4px 2px 1px #4af7ff, 3px 3px 1px #165bfb, 5px 3px 1px #4af7ff, 4px 4px 1px #165bfb, 6px 4px 1px #4af7ff, 5px 5px 1px #165bfb, 7px 5px 1px #4af7ff, 6px 6px 1px #165bfb, 8px 6px 1px #4af7ff, 7px 7px 1px #165bfb, 9px 7px 1px #4af7ff',

  span: {
    display: 'block',
    position: 'relative',
    '&:before': {
      content: 'attr(data-text)',
      position: 'absolute',
      textShadow: '2px 2px 1px #e94aa1, -1px -1px 1px #c736f9, -2px 2px 1px #e94aa1, 1px -1px 1px #f736f9',
      zIndex: 1,
    },

    '&:nthChild(1)': {
      paddingRight: '2.25rem',
    },

    '&:nthChild(2)': {
      paddingLeft: '2.25rem',
    },
  },
});

const HomePage = () => {
  const [searchWord, setSearchWord] = useState<string>('');
  const [randomData, setRandomData] = useState<CardModel>();
  const [status, setStatus] = useState<boolean>(true);
  const [restaurantData, setRestaurantData] = useState<CardModel[]>();

  const getData = async (foodName: string) => {
    const data: DataType = await searchRestaurants(foodName || 'restaurant');
    const { results } = data;
    setRestaurantData(results);
    setRandomData(results && results[Math.floor(Math.random() * results.length)]);
  };

  useEffect(() => {
    if (searchWord !== '') setStatus(false);
    else setStatus(true);
    getData(searchWord);
  }, [searchWord]);

  return (
    <>
      <SearchBar setSearchWord={setSearchWord} />
      <TitleWrapper>
        <SweetTitle data-cy="title">
          <span data-text="Find Restaurant">Find Restaurant</span>
          <span data-text="Around YOU!">Around YOU!</span>
        </SweetTitle>
      </TitleWrapper>
      <HomeCompoenet>
        {!searchWord
          ? 'Random Restaurant:'
          : searchWord}
        {(status && randomData) && <RestaurantCard data={randomData} index={0} />}
        {(!status && restaurantData) && <CardsList restaurantData={restaurantData} />}
        {!randomData && 'No Result'}
      </HomeCompoenet>
      <MapView data-cy="map-view">
        <Map locations={restaurantData} status={status} randomData={randomData} />
      </MapView>
    </>
  );
};

export default HomePage;
