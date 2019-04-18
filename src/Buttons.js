import React from 'react';
import './Buttons.css';
import EqualsButton from './EqualsButton'

const Buttons = () => {
  return (
    <div className='Buttons'> 
      <div className='Operators'>            
        <button name='+'>+</button>
        <button name='-'>-</button>
        <button name='×'>×</button>
        <button name='÷'>÷</button>
      </div>
      <div className='AllButtons'>
        <div>
          <div className='numbers'>
            <button name='7'>7</button>
            <button name='8'>8</button>
            <button name='9'>9</button>
          </div>
          <div className='numbers'>
            <button name='4'>4</button>
            <button name='5'>5</button>
            <button name='6'>6</button>
          </div>
          <div className='numbers'>
            <button name='1'>1</button>
            <button name='2'>2</button>
            <button name='3'>3</button>
          </div>
          <div className='numbers'>
            <button name='0'>0</button>
            <button name='.'>.</button>
            <button name='C'>C</button>
          </div>                   
        </div>
        <EqualsButton /> 
      </div>
    </div>
  );
}

export default Buttons;

