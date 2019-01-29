import React from 'react'
import Slider from 'react-slick';
import slide_one from '../../resources/images/slide_one.jpg';
import slide_two from '../../resources/images/slide_two.jpg';
import slide_three from '../../resources/images/slide_three.jpg';

const Carousel = () => {

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div
      className='corrousel_wrapper'
      style={{
        height: `${window.innerHeight}px`,
        overflow: 'hidden',
        background: 'black'
      }}
    >
      <Slider {...settings}>
        <div>
          <div className='corrousel_image'
            style={{
              background: `url(${slide_one})`,
              height: `${window.innerHeight}px`
            }}
          >
          </div>
        </div>
        <div>
          <div className='corrousel_image'
            style={{
              background: `url(${slide_two})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: `${window.innerHeight}px`
            }}
          >
          </div>
        </div>
        <div>
          <div className='corrousel_image'
            style={{
              background: `url(${slide_three})`,
              height: `${window.innerHeight}px`
            }}
          >
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Carousel;
