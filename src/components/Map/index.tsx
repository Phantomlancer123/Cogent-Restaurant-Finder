import React from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import { currentLocation } from '../../config/Location';
import { CardModel } from '../../models';

type Props = {
  locations: CardModel[],
  status: boolean,
  randomData: CardModel
};

const Map: React.FC<Props> = ({ locations, status, randomData }) => {
  const positions: any = [];

  if (status) {
    positions.push(
      {
        lat: randomData.geocodes.main.latitude,
        lng: randomData.geocodes.main.longitude,
      },
    );
  } else {
    locations.forEach((location) => {
      positions.push(
        {
          lat: location.geocodes.main.latitude,
          lng: location.geocodes.main.longitude,
        },
      );
    });
  }
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API || ''}>
      <GoogleMap
        mapContainerStyle={{ width: '500px', height: '300px' }}
        center={currentLocation}
        zoom={15}
      >
        <MarkerF position={currentLocation} label="🏠" />
        {
          positions.map((p: any, index: number) => <MarkerF position={p} label={(index + 1).toString()} />)
        }
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
