import React from 'react';

class Clock extends React.Component {
  formatSeconds(totalSeconds) {
    var sec = totalSeconds % 60
    var min = Math.floor(totalSeconds / 60)

    if(sec < 10) {
      sec = "0" + sec
    }

    if(min < 10) {
      min = "0" + min
    }

    return `${min}:${sec}`
  }

  render() {
    return (
      <div className="">
        Rendered Clock
      </div>
    );
  }
}

export default Clock;
