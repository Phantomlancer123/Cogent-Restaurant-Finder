import React from 'react';

import {
  Card, Grid, CardMedia, CardContent, Typography, CardActionArea,
} from '@mui/material';
import { CardModel } from '../../models';

type Props = {
  data: CardModel;
};

const RestaurantCard: React.FC<Props> = ({ data }) => {
  console.log('detail', data);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`${data.photos[0].prefix}width300${data.photos[0].suffix}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Grid container>
              {data.categories
                && data.categories.map((item: any) => (
                  <Grid item spacing={2} key={item.id} sx={{ p: 1 }}>
                    <CardMedia
                      component="img"
                      image={`${item.icon.prefix}64${item.icon.suffix}`}
                      alt={item.icon.name}
                      height="64"
                      width="64"
                      sx={{ backgroundColor: '#444' }}
                    />
                  </Grid>
                ))}
            </Grid>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default RestaurantCard;
