import React from 'react';
import GoogleMapReact from 'google-map-react';

export default function Location (){
  return (
    <div>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_KEY }}
        defaultCenter={{lat: 59.95, lng: 30.33}}
        defaultZoom={11}
      >
      </GoogleMapReact>
    </div>
  )
}
