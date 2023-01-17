import React from 'react';
import { Card, CardMedia, CardActionArea } from '@mui/material';

import { WrapperCard } from './index.style';

type Icon = {
  prefix: string,
  suffix: string
};

type Props = {
  photos: Icon[]
};

const PhotoList: React.FC<Props> = ({ photos }) => (
  <WrapperCard>
    {
      photos.map((photo) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image={`${photo.prefix}width300${photo.suffix}`}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
      ))
    }
  </WrapperCard>

);

export default PhotoList;
