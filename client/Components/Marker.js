import React from 'react';

export default function Marker(props){
  return (
    <div className="marker">
      <img id="marker-img" src={"../../public/images/" + props.img} alt="marker"/>
    </div>
  )
}
