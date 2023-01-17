import React from 'react';

import {
  Card, Grid, CardMedia, CardContent, Typography, CardActionArea, Rating,
} from '@mui/material';
import { CardModel } from '../../models';

type Props = {
  data: CardModel;
  index: number;
};

const RestaurantCard: React.FC<Props> = ({ data, index }) => {
  console.log('detail', data);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={`${data.photos[0].prefix}width300${data.photos[0].suffix}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis',
            }}
          >
            {`${index + 1}.${data.name}`}
          </Typography>
          <Typography gutterBottom variant="body2" component="div" style={{ display: 'flex', color: 'gray' }}>
            <Rating name="simple-controlled" value={data.rating / 2} />
            {' '}
            {data.rating}
          </Typography>
          <Typography gutterBottom variant="body1" component="div" style={{ display: 'flex' }}>
            {data.location.address}
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
