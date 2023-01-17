import React from 'react';
import { styled } from '@mui/material/styles';

import { CardModel } from '../../models';
import RestaurantCard from '../RestaurantCard';

type Props = {
  restaurantData: CardModel[]
};

const WrapperCard = styled('div')({
  width: '1200px',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  gridGap: '45px',
  margin: '0 auto',
});

const CardsList: React.FC<Props> = ({ restaurantData }) => (
  <WrapperCard>
    {restaurantData.map((data, index) => (
      <RestaurantCard data={data} index={index} />
    ))}
  </WrapperCard>
);

export default CardsList;
