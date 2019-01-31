import React from 'react';
import Button from '@material-ui/core/Button';
import ticketIcon from '../../resources/images/icons/ticket.png';

const SmallButton = props => {
  return (
    <Button
      variant='contained'
      size='small'
      style={{
        background: props.background,
        color: props.color,
      }}
    >
      <img
        src={ticketIcon}
        className='iconImage'
        alt='ticketIcon'
      />
      {props.text}
    </Button>
  )
}

export default SmallButton;
