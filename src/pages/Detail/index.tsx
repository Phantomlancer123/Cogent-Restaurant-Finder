import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Rating } from '@mui/material';
import { styled } from '@mui/material/styles';

import { getRestaurantDetail } from '../../utils';
import PhotoList from '../../components/PhotoList';
import { CardModel } from '../../models';
import Map from '../../components/Map';

const TitleWrapper = styled('h1')({
  top: '100px',
  fontSize: '46px',
  fonWeight: '700',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  width: '160px',
  textAlign: 'center',
  marginLeft: '10%',
  whiteSpace: 'nowrap',
  paddingBottom: '13px',
  '&:before': {
    backgroundColor: '#c50000',
    content: '""',
    display: 'block',
    height: '3px',
    width: '75px',
    marginBottom: '5px',
  },
});

const Address = styled('span')({
  marginTop: '40px',
  textTransform: 'none',
  fontWeight: 'normal',
  color: '#542b2b',
  letterSpacing: '-0.005em',
  wordSpacing: '1px',
  marginLeft: '12%',
  fontSize: '30px',
});

const WorkingTime = styled('div')({
  marginTop: '15px',
  textTransform: 'none',
  fontWeight: 'normal',
  color: '#102c48',
  letterSpacing: '-0.005em',
  wordSpacing: '1px',
  marginLeft: '12%',
  fontSize: '20px',
});

const TelTime = styled('div')({
  marginTop: '15px',
  marginBottom: '15px',
  textTransform: 'none',
  fontWeight: 'normal',
  color: '#102c48',
  letterSpacing: '-0.005em',
  wordSpacing: '1px',
  marginLeft: '12%',
  fontSize: '20px',
});

const WebsiteLink = styled('a')({
  marginTop: '15px',
  textTransform: 'none',
  fontWeight: 'normal',
  color: '#102c48',
  letterSpacing: '-0.005em',
  wordSpacing: '1px',
  marginLeft: '12%',
  fontSize: '20px',
});

const MapView = styled('div')({
  position: 'fixed',
  right: '50px',
  bottom: '0px',
  zIndex: '99',
});

const DetailPage = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState<CardModel>();

  const getData = async (id: string) => {
    const data: any = await getRestaurantDetail(id);
    if (data) setDetailData(data);
  };

  useEffect(() => {
    if (id) getData(id);
  }, []);

  return (
    <div style={{ marginTop: '5%' }}>
      {detailData && (
        <>
          <TitleWrapper>
            {' '}
            {detailData?.name}
          </TitleWrapper>
          <Address>
            📍
            {detailData?.location.address}
          </Address>
          <Typography gutterBottom variant="body2" component="div" style={{ display: 'flex', marginLeft: '12%', marginTop: '20px' }}>
            <Rating name="simple-controlled" value={detailData.rating / 2} />
            {' '}
            {detailData.rating}
          </Typography>
          <WorkingTime>{detailData.hours.display}</WorkingTime>
          <TelTime>
            📞
            {detailData.tel}
          </TelTime>
          <WebsiteLink href={detailData.website}>
            🌐
            {detailData.website}
          </WebsiteLink>
          <PhotoList photos={detailData?.photos} />
          <MapView><Map status randomData={detailData} /></MapView>
        </>
      )}
    </div>
  );
};

export default DetailPage;
