import React from 'react';
import PropTypes from 'prop-types';


class Clock extends React.Component {
  static defaultProps = {
    totalSeconds: 0
  }

  static propTypes = {
    totalSeconds: PropTypes.number.isRequired
  }

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
    var { totalSeconds } = this.props;
    return (
      <div className="clock-container">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }
}

export default Clock;
