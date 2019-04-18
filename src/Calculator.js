import React, { Component } from 'react';
import './Calculator.css';
import Input from './Input.js';
import Buttons from './Buttons.js';
import operations from './operations.js';



class Calculator extends Component {
  constructor() {
    super();
    this.state= {
      resultDisplayed: false,
      input:'5+4-8.7'
    };
  }

  clear = () => {
    this.setState({input: ''});
  }

  equalsPressed = () => {
    let inputString = this.state.input;
    let numbers = inputString.split(/\+|-|×|÷/g);//array of numbers
    let operators = inputString.replace(/[0-9]|\./g, '').split('');//array of operators
    const operationChars = Object.keys(operations); //[+, -, ×, ÷]
    for (let i = 0; i < operationChars.length; i++) {
      let currentOperator = operationChars[i];
      let currentOperationFunction = operations[currentOperator];
      let indexOfOperationToExecute = operators.indexOf(currentOperator);
      while(indexOfOperationToExecute != -1) {
        let currentResult = currentOperationFunction(numbers[indexOfOperationToExecute], numbers[indexOfOperationToExecute + 1]);
        numbers.splice(indexOfOperationToExecute, 2, currentResult);
        operators.splice(indexOfOperationToExecute, 1);
        let indexOfOperationToExecute = operators.indexOf(currentOperator);
      }
    }
    this.setState({
      input: numbers[0],
      resultDisplayed: true
    });
  }
  
  render() {
    return (
      <div className="App">
        <h1>CALCULATOR</h1>
        <div className='Calculator'>
          <Input input={this.state.input}/>
          <Buttons handleButtonClick={this.handleButtonClick}/>
        </div>
        <h5>Designed and Maintained by deepaligarg1001@gmail.com</h5>
      </div>
    );
  }
}

export default Calculator;
