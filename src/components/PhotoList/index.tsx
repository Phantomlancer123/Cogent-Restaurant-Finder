import React from 'react';
import {
  Card, CardMedia, CardActionArea, styled,
} from '@mui/material';

type Icon = {
  prefix: string,
  suffix: string
};

type Props = {
  photos: Icon[]
};

const WrapperCard = styled('div')({
  width: '1200px',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  gridGap: '45px',
  margin: '30px auto',
});

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
