import React from 'react';
import Collage from './collage'

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
            <div className="description">
              <p>Welcome to Dougal's page.</p>
              <p>If you found Dougal, please contact his parents Gabriela Medina & Stephen Costello.</p>
              <p>Email: gmedina229@gmail.com or stephen.costello1991@gmail.com</p>
              <p>Phone: 516-532-4559 or 347-640-1321</p>
            </div>
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
