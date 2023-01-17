import React from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import { currentLocation } from '../../config/Location';

type Props = {
  lat: number,
  lng: number
};

const Map: React.FC<Props> = ({ lat, lng }) => {
  const position = {
    lat,
    lng,
  };
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API || ''}>
      <GoogleMap
        mapContainerStyle={{ width: '500px', height: '300px' }}
        center={currentLocation}
        zoom={15}
      >
        <MarkerF position={currentLocation} label="🏠" />
        <MarkerF position={position} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
