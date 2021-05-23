import React from "react";
import './Over.css'

class Over extends React.Component {

  render() {
    var message = ''
    if(this.props.playing === true)message =<p><span>Game On (press any key to start)</span></p>;
    else message =  <p><span className="blink">Game Over!!!!!</span></p>;
    return message
  }
}

export default Over;
