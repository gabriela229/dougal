import React from 'react';
import Collage from './Collage'
import About from './About'

export default function Main() {

    return (
      <div>
        <div className="flex-grid">
          <div className="col">
            <h1 className="title">Dougal Costello</h1>
            <div className="arrow">\/</div>
            <video className="header-video" src="/../../public/images/dougalAtParkClip.mov" autoPlay loop muted />
          </div>
        </div>
        <div className="flex-grid">
          <div className="col">
            <About />
          </div>
        </div>
        <div className="flex-grid">
          <div className="col">
            <Collage />
          </div>
        </div>
      </div>
    );
}
