import React from 'react';

export default function Main() {

    return (
      <div className="container">
        <div className="row">
          <h1 className="mx-auto">Dougal Costello</h1>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div card>
              <img className="card-img" src="/../../public/images/Dougal.jpg" alt="Card image" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                Welcome to Dougal's page. If you're here, it means Dougal is lost.
                Please contact Dougal's parents Gabriela Medina & Stephen Costello
                Email: gmedina229@gmail.com or stephen.costello1991@gmail.com
                Phone: 516-532-4559 or 347-640-1321
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
