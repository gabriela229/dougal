import React from 'react';
import GoogleMap from 'google-map-react';
import Marker from './Marker';

export default function Location (){
  return (
    <div>
      <GoogleMap
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_KEY }}
        defaultCenter={{lat:40.7440, lng:-74.0324}}
        defaultZoom={15}
      >
        <Marker img={"vetMarker.png"} lat={40.744716} lng={-74.035606} />
        <Marker img={"dougalSmileMarker.png"} lat={40.747629} lng={-74.036686} />
      </GoogleMap>
    </div>
  )
}
