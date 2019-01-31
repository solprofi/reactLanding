import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

export default class Timer extends Component {

  state = {
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0',
  }

  componentDidMount = () => {
    setInterval(() => this.timeUntilEvent('April, 9, 2019'), 1000);
  }

  timeUntilEvent = (deadline) => {
    const timeLeft = Date.parse(deadline) - Date.parse(new Date());

    const seconds = Math.floor((timeLeft / 1000) % 60);
    const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
    const hours = Math.floor((timeLeft / (1000 * 60 * 60) % 24));
    const days = Math.floor((timeLeft / (1000 * 60 * 60 * 24)));

    this.setState({
      seconds,
      minutes,
      hours,
      days,
    });
  }


  render() {

    const {
      seconds,
      hours,
      minutes,
      days,
    } = this.state;

    return (
      <Slide left delay={800}>
        <div className='countdown_wrapper'>
          <div className='countdown_top'>
            Event Starts In
          </div>
          <div className='countdown_bottom'>
            <div className='countdown_item'>
              <div className='countdown_time'>
                {days}
              </div>
              <div className='countdown_tag'>
                Days
            </div>
            </div>
            <div className='countdown_item'>
              <div className='countdown_time'>
                {hours}
              </div>
              <div className='countdown_tag'>
                Hours
              </div>
            </div>
            <div className='countdown_item'>
              <div className='countdown_time'>
                {minutes}
              </div>
              <div className='countdown_tag'>
                Minutes
              </div>
            </div>
            <div className='countdown_item'>
              <div className='countdown_time'>
                {seconds}
              </div>
              <div className='countdown_tag'>
                Seconds
              </div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}
