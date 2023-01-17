import React from 'react';

import RestaurantCard from '../RestaurantCard';
import { CardModel } from '../../models';
import { WrapperCard } from './index.style';

type Props = {
  restaurantData: CardModel[]
};

const CardsList: React.FC<Props> = ({ restaurantData }) => (
  <WrapperCard>
    {restaurantData.map((data) => (
      <RestaurantCard data={data} />
    ))}
  </WrapperCard>
);

export default CardsList;
