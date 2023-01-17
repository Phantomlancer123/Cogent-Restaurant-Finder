import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

type Props = {
  lat: number,
  lng: number
};

const Map: React.FC<Props> = ({ lat, lng }) => {
  const center = {
    lat,
    lng,
  };
  console.log(center);
  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_MAP_API || ''}>
      <GoogleMap
        mapContainerStyle={{ width: '500px', height: '300px' }}
        center={center}
        zoom={18}
      >
        {center && <Marker position={center} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
