import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { CardActionArea } from '@mui/material';
import { CardModel } from '../../models';

type Props = {
  data: CardModel;
};

const RestaurantCard: React.FC<Props> = ({ data }) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={data.src}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.detail}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default RestaurantCard;
