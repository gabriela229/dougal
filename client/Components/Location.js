import React from 'react';
import GoogleMapReact from 'google-map-react';

export default function Location (){
  return (
    <div>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_KEY }}
        defaultCenter={{lat:40.7440, lng:-74.0324}}
        defaultZoom={15}
      >
      </GoogleMapReact>
    </div>
  )
}
