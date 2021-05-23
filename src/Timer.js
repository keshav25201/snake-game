import React from "react";


class Timer extends React.Component {

  render() {
    var time = Math.floor((150*this.props.time)/1000);
    return <p>TIME : {time}   SCORE : {this.props.score}</p>
  }
}

export default Timer;
