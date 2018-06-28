import React from 'react';
import Clock from 'Clock'

class Countdown extends React.Component {
  render() {
    return (
      <div className="">
        <Clock totalSeconds={120}/>
      </div>
    );
  }
}

export default Countdown;
