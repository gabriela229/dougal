import React from 'react';
import Collage from './Collage';
import About from './About';
import Header from './Header';

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
          </div>
        </div>
      </div>
    );
}
