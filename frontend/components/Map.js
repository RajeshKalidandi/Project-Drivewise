import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Map = ({ locations }) => (
  <LoadScript googleMapsApiKey="YOUR_OLA_MAPS_API_KEY">
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      {locations.map((location) => (
        <Marker key={location.id} position={{ lat: location.lat, lng: location.lng }} />
      ))}
    </GoogleMap>
  </LoadScript>
);

export default Map;