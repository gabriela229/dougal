import React, {Component} from 'react';

export default class Header extends Component {
  constructor(){
    super();
    this.state = {
      height: 0,
      width: 0
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({height: window.innerHeight, width: window.innerWidth});
  }
  render(){
    const {width} = this.state;
    return (
      <div className="header">
        <h1 className="title">Dougal Costello</h1>
        {/*<div className="arrow">\/</div>*/}
        {width <= 411 ?
          <video className="header-video" src="https://s3.us-east-2.amazonaws.com/dougalc/dougalAtParkClip.mov" autoPlay loop muted /> :
          <video className="header-video-fullwidth" src="https://s3.us-east-2.amazonaws.com/dougalc/dougalAtThePark.mp4" autoPlay loop muted />
        }

      </div>
    );
  }
}
