import React from 'react';

import RestaurantCard from '../RestaurantCard';
import { CardModel } from '../../models';
import { WrapperCard } from './index.style';

const mockData: CardModel[] = [
  {
    src: '1.jpg',
    name: 'Ramen Restaurant',
    detail: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  },
  {
    src: '1.jpg',
    name: 'Ramen Restaurant',
    detail: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  },
  {
    src: '1.jpg',
    name: 'Ramen Restaurant',
    detail: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  },
  {
    src: '1.jpg',
    name: 'Ramen Restaurant',
    detail: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  },
  {
    src: '1.jpg',
    name: 'Ramen Restaurant',
    detail: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  },
  {
    src: '1.jpg',
    name: 'Ramen Restaurant',
    detail: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  },
  {
    src: '1.jpg',
    name: 'Ramen Restaurant',
    detail: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  },
  {
    src: '1.jpg',
    name: 'Ramen Restaurant',
    detail: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  },
  {
    src: '1.jpg',
    name: 'Ramen Restaurant',
    detail: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  },
  {
    src: '1.jpg',
    name: 'Ramen Restaurant',
    detail: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  },
];
export default function CardsList() {
  return (
    <WrapperCard>
      {mockData.map((data) => (
        <RestaurantCard data={data} />
      ))}
    </WrapperCard>
  );
}
