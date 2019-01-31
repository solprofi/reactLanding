import React from 'react'

const Location = () => {
  return (
    <div className='location_wrapper'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.3142251733802!2d-93.34631458488059!3d30.228114581815873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x863b8c1933ce9fcf%3A0x174ad2faf08bed27!2s1403+Diane+Dr%2C+Sulphur%2C+LA+70663%2C+USA!5e0!3m2!1sen!2sua!4v1548877445446"
        width="100%"
        height="450"
        frameBorder="0"
        allowFullScreen
      />

      <div className='location_tag'>
        <div>
          Location
        </div>
      </div>
    </div>
  )
}

export default Location;
