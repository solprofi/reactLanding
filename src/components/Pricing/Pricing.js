import React, { Component } from 'react';
import SmallButton from '../Button/Button';
import Zoom from 'react-reveal/Zoom';


export default class Pricing extends Component {

  state = {
    priceBoxes: [
      {
        price: 100,
        position: '1st fan-zone',
        description: 'Lorema sad asdqwe  qwe qw e asasdasdasd',
        delay: 300,
      },
      {
        price: 200,
        position: '2nd fan-zone',
        description: 'Lorema sad asdqwe  qwe qw e asasdasdasd',
        delay: 0,
      },
      {
        price: 300,
        position: 'Lodge',
        description: 'Lorema sad asdqwe  qwe qw e asasdasdasd',
        delay: 300,
      },
    ]
  }

  render() {
    return (
      <div className='bck_black'>
        <div className='center_wrapper pricing_section'>
          <h2>Pricing</h2>

          <div className='pricing_wrapper'>
            {this.state.priceBoxes.map((el, index) => (
              <Zoom delay={el.delay} key={index}>
                <div className='pricing_item'>
                  <div className='pricing_inner_wrapper'>
                    <div className='pricing_title'>
                      <span>${el.price}</span>
                      <span>{el.position}</span>
                    </div>
                    <div className='pricing_description'>
                      {el.description}
                    </div>
                    <div className='pricing_buttons'>
                      <SmallButton
                        text='Buy tickets'
                        color='white'
                        background='#ffa800'
                      />
                    </div>
                  </div>
                </div>
              </Zoom>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
