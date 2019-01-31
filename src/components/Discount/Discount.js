import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import SmallButton from '../Button/Button';

export default class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 40,
  }

  componentDidUpdate = () => {
    setTimeout(this.revealPercentage, 25);
  }


  revealPercentage = () => {
    const { discountStart, discountEnd } = this.state;

    if (discountStart < discountEnd) {
      this.setState({
        discountStart: discountStart + 1
      });
    }
  }
  render() {
    return (
      <div className='center_wrapper'>
        <div className='discount_wrapper'>
          <Fade onReveal={this.revealPercentage}>
            <div className='discount_percentage'>
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className='discount_description'>
              <h3>Purchase tickets before the date</h3>
              <p>
                Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            </p>
              <div>
                <SmallButton
                  text='Purchase tickets'
                  background='red'
                  color='white'
                />
              </div>
            </div>
          </Slide>
        </div>
      </div>
    )
  }
}
