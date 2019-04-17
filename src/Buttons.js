import React from 'react';
import './Buttons.css';
import EqualsButton from './EqualsButton';
import NumberButton from './numberButton';

const Buttons = () => {
  return (
    <div className='Buttons'>
      <NumberButton />
      <EqualsButton />
    </div>
  );
}

export default Buttons;

