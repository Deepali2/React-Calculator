import React, { Component } from 'react';
import './Calculator.css';
import Input from './Input.js';
import Buttons from './Buttons.js';

class Calculator extends Component {
  render() {
    return (
      <div className="App">
        CALCULATOR
        <Input/>
        <Buttons/>
        <h5>Designed and Maintained by deepaligarg1001@gmail.com</h5>
      </div>
    );
  }
}

export default Calculator;
