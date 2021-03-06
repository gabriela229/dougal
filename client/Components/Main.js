import React from 'react';
import Masonry from './Masonry';
import About from './About';
import Header from './Header';
import Location from './Location';

export default function Main() {

    return (
      <div>
        <div className="flex-grid">
          <div className="col">
            <Header />
          </div>
        </div>
        <div className="flex-grid">
          <div className="col description-col">
            <About />
          </div>
        </div>
        <div className="flex-grid">
          <div className="col">
            <Location />
          </div>
        </div>
        <div className="flex-grid">
        <div className="col">
          <Masonry />
        </div>
      </div>
      </div>
    );
}
