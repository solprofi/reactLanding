import React from 'react';
import Carousel from '../Carousel/Carousel';
import Timer from '../Timer/Timer';

const Hero = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Carousel />
      <Timer />

      <div className='artist_name'>
        <div className='wrapper'>
          Ariana Grande
        </div>
      </div>
    </div>
  )
}

export default Hero;
