import React from 'react';
import './EqualsButton.css';

const EqualsButton = (props) => {
  return (
    <button className='EqualsButton' onClick={props.equalsPressed}>=</button>
  );
}

export default EqualsButton;