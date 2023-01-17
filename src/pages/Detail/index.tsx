import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Typography, Rating, styled } from '@mui/material';

import { CardModel } from '../../models';
import { getRestaurantDetail } from '../../utils';
import PhotoList from '../../components/PhotoList';
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

const ButtonView = styled('div')(() => ({
  position: 'fixed',
  right: '50px',
  top: '100px',
  zIndex: '99',
}));

const BackButton = styled('div')(() => ({
  alignSelf: 'center',
  backgroundColor: 'none',
  backgroundImage: 'none',
  backgroundPosition: '0 90%',
  backgroundRepeat: 'repeat noRepeat',
  backgroundSize: '4px 3px',
  borderRadius: '15px 225px 255px 15px 15px 255px 225px 15px',
  borderStyle: 'solid',
  borderWidth: '2px',
  boxShadow: 'rgba(0, 0, 0, .2) 15px 28px 25px -18px',
  boxSizing: 'border-box',
  color: 'white',
  cursor: 'pointer',
  display: 'inline-block',
  fontFamily: 'Neucha, sansSerif',
  fontSize: '1rem',
  lineHeight: '23px',
  outline: 'none',
  padding: '.75rem',
  textDecoration: 'none',
  transition: 'all 235ms ease-in-out',
  borderBottomLeftRadius: '15px 255px',
  borderBottomRightRadius: '225px 15px',
  borderTopLeftRadius: '255px 15px',
  borderTopRightRadius: '15px 225px',
  userSelect: 'none',
  touchAction: 'manipulation',
  '&:hover': {
    boxShadow: 'rgba(0, 0, 0, .3) 2px 8px 8px -5px',
    transform: 'translate3d(0, 2px, 0)',
  },
  '&:focus': {
    boxShadow: 'rgba(0, 0, 0, .3) 2px 8px 4px -6px',
  },
}));

const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [detailData, setDetailData] = useState<CardModel>();

  const getData = async (detailId) => {
    const data: any = await getRestaurantDetail(detailId);
    if (data) setDetailData(data);
  };

  const onClickDetail = useCallback(() => {
    navigate('/home');
  }, [navigate]);

  useEffect(() => {
    if (id) getData(id);
  }, [id]);
  if (detailData) {
    return (
      <>
        <TitleWrapper data-cy="restaurant-name">
          {' '}
          {detailData?.name}
        </TitleWrapper>
        <ButtonView><BackButton onClick={onClickDetail} data-cy="back-button">Go to Back</BackButton></ButtonView>
        <Address data-cy="restaurant-address">
          📍
          {detailData?.location.address}
        </Address>
        <Typography gutterBottom variant="body2" component="div" style={{ display: 'flex', marginLeft: '12%', marginTop: '20px' }}>
          <Rating name="simple-controlled" value={detailData.rating / 2} data-cy="restaurant-rating" />
          {' '}
          {detailData.rating}
        </Typography>
        <WorkingTime data-cy="restaurant-working-time">{detailData.hours.display}</WorkingTime>
        <TelTime data-cy="restaurant-tel">
          📞
          {detailData.tel || 'No Phone Number'}
        </TelTime>
        <WebsiteLink href={detailData.website} target="_blank" data-cy="restaurant-website">
          🌐
          {detailData.website || 'No URL'}
        </WebsiteLink>
        <PhotoList photos={detailData?.photos} />
        <MapView data-cy="restaurant-map"><Map status randomData={detailData} /></MapView>
      </>
    );
  }
  return null;
};

export default DetailPage;
