import React from 'react';
import './Buttons.css';
import EqualsButton from './EqualsButton'

const Buttons = (props) => {
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
            <button name='7' onClick={props.numberButtonCLick}>7</button>
            <button name='8' onClick={props.numberButtonCLick}>8</button>
            <button name='9' onClick={props.numberButtonCLick}>9</button>
          </div>
          <div className='numbers'>
            <button name='4' onClick={props.numberButtonCLick}>4</button>
            <button name='5' onClick={props.numberButtonCLick}>5</button>
            <button name='6' onClick={props.numberButtonCLick}>6</button>
          </div>
          <div className='numbers'>
            <button name='1' onClick={props.numberButtonCLick}>1</button>
            <button name='2' onClick={props.numberButtonCLick}>2</button>
            <button name='3' onClick={props.numberButtonCLick}>3</button>
          </div>
          <div className='numbers'>
            <button name='0' onClick={props.numberButtonCLick}>0</button>
            <button name='.' onClick={props.numberButtonCLick}>.</button>
            <button name='C' onClick={props.clear}>C</button>
          </div>                   
        </div>
        <EqualsButton /> 
      </div>
    </div>
  );
}

export default Buttons;

