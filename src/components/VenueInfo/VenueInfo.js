import React from 'react';
import Zoom from 'react-reveal/Zoom';
import calendarIcon from '../../resources/images/icons/calendar.png';
import locationIcon from '../../resources/images/icons/location.png';

const VenueInfo = () => {
  return (

    <div className='bck_black'>
      <div className='center_wrapper'>
        <div className='vn_wrapper'>
          <Zoom duration={500}>
            <div className='vn_item'>
              <div className='vn_outer'>
                <div className='vn_inner'>
                  <div className='vn_icon_square bck_red'></div>
                  <div
                    className='vn_icon'
                    style={{
                      background: `url(${calendarIcon})`
                    }}
                  ></div>
                  <div className='vn_title'>
                    Event Date & Time
                </div>
                  <div className='vn_desc'>
                    Apr 9th at 13:00
                </div>
                </div>
              </div>
            </div>
          </Zoom>

          <Zoom duration={500} delay={200}>
            <div className='vn_item'>
              <div className='vn_outer'>
                <div className='vn_inner'>
                  <div className='vn_icon_square bck_yellow'></div>
                  <div
                    className='vn_icon'
                    style={{
                      background: `url(${locationIcon})`
                    }}
                  ></div>
                  <div className='vn_title'>
                    Event Location
                </div>
                  <div className='vn_desc'>
                    Kyiv Ukraine
                </div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  )
}

export default VenueInfo;
