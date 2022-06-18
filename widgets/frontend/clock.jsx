import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentTime: new Date() };
    this._tick = this._tick.bind(this);
  }

  _tick() {
    this.setState({ currentTime: new Date() });
  }

  componentDidMount() {
    this.intervalId = setInterval(this._tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    let hours = this.state.currentTime.getHours();
    let minutes = this.state.currentTime.getMinutes();
    let seconds = this.state.currentTime.getSeconds();

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return (
      <div>
        <h1>Clock</h1>
        <div className="clock">
          <p>
            <span>Time:</span>
            <span>
              {hours}:{minutes}:{seconds} PDT
            </span>
          </p>
          <p>
            <span>Date:</span>
            <span>{this.state.currentTime.toDateString()}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Clock;
