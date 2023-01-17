import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';

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

const TitleWrapper = styled('div')({
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  transform: 'skew(0,-10deg)',
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
      <TitleWrapper>
        <SweetTitle>
          <span data-text="Find Restaurant">Find Restaurant</span>
          <span data-text="Around YOU!">Around YOU!</span>
        </SweetTitle>
      </TitleWrapper>
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
