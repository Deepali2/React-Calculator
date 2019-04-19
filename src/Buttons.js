import React from 'react';
import './Buttons.css';
import EqualsButton from './EqualsButton'

const Buttons = (props) => {
  return (
    <div className='Buttons'> 
      <div className='Operators'>            
        <button type='button' value='+'>+</button>
        <button type='button' value='-'>-</button>
        <button type='button' value='×'>×</button>
        <button type='button' value='÷'>÷</button>
      </div>
      <div className='AllButtons'>
        <div>
          <div className='numbers'>
            <button type='button' value='7' onClick={props.numberButtonClick}>7</button>
            <button type='button' value='8' onClick={props.numberButtonClick}>8</button>
            <button type='button' value='9' onClick={props.numberButtonClick}>9</button>
          </div>
          <div className='numbers'>
            <button type='button' value='4' onClick={props.numberButtonClick}>4</button>
            <button type='button' value='5' onClick={props.numberButtonClick}>5</button>
            <button type='button' value='6' onClick={props.numberButtonClick}>6</button>
          </div>
          <div className='numbers'>
            <button type='button' value='1' onClick={props.numberButtonClick}>1</button>
            <button type='button' value='2' onClick={props.numberButtonClick}>2</button>
            <button type='button' value='3' onClick={props.numberButtonClick}>3</button>
          </div>
          <div className='numbers'>
            <button type='button' value='0' onClick={props.numberButtonClick}>0</button>
            <button type='button' value='.' onClick={props.numberButtonClick}>.</button>
            <button type='button' value='C' onClick={props.clear}>C</button>
          </div>                   
        </div>
        <EqualsButton equalsPressed={props.equalsPressed}/> 
      </div>
    </div>
  );
}

export default Buttons;

