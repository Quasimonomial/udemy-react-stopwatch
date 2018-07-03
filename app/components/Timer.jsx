import React from 'react';
import Clock from 'Clock'

class Timer extends React.Component {
  render() {
    return (
      <div className="">
        Rendered Timer
        <Clock totalSeconds="62" />
      </div>
    );
  }
}

export default Timer;
