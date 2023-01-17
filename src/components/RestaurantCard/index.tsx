import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Card, Grid, CardMedia, CardContent, Typography, CardActionArea, Rating,
} from '@mui/material';
import { CardModel } from '../../models';

type Props = {
  data: CardModel;
  index: number;
};

const RestaurantCard: React.FC<Props> = ({ data, index }) => {
  const navigate = useNavigate();

  const imageSrc = data.photos.length ? `${data.photos[0].prefix}width300${data.photos[0].suffix}` : 'https://as2.ftcdn.net/v2/jpg/04/70/29/97/1000_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg';

  const onClickDetail = useCallback(() => {
    navigate(`/detail/${data.fsq_id}`);
  }, [data.fsq_id, navigate]);
  return (
    <Card sx={{ maxWidth: 345 }} onClick={onClickDetail} data-cy="display-card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={imageSrc}
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
          <Grid container>
            {data.categories
              && data.categories.map((item: any) => (
                <Grid item key={item.id} sx={{ p: 1 }}>
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
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default RestaurantCard;
