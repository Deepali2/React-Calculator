import React, { Component } from 'react';
import './Calculator.css';
import Input from './Input.js';
import Buttons from './Buttons.js';
import operations from './operations.js';

const operationChars = Object.keys(operations);

class Calculator extends Component {
  constructor() {
    super();
    this.state= {
      numbers: [],
      operators: [],
      resultDisplayed: false,
      input:''
    };
  }
  
  render() {
    return (
      <div className="App">
        <h1>CALCULATOR</h1>
        <div className='Calculator'>
          <Input/>
          <Buttons/>
        </div>
        <h5>Designed and Maintained by deepaligarg1001@gmail.com</h5>
      </div>
    );
  }
}

export default Calculator;
