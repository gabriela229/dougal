import React from 'react';
import Collage from './Collage.js';
import About from './About.js';
import Header from './Header.js';

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
            <Collage />
          </div>
        </div>
      </div>
    );
}
