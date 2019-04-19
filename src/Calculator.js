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
      input:''
    };
    this.clear = this.clear.bind(this);
    this.equalsPressed = this.equalsPressed.bind(this);
    this.numberButtonClick = this.numberButtonClick.bind(this);
    this.operatorButtonClick = this.operatorButtonClick.bind(this);
  }

  clear = () => {
    this.setState({
      input: '',
      resultDisplayed: false
    });
  }

  numberButtonClick = (e) => {
    let currentString = this.state.input;
    const operationChars = Object.keys(operations);
    let lastChar = currentString[currentString.length - 1];
    if (this.state.resultDisplayed === false) {
      currentString += e.target.value;
      this.setState({
        input: currentString
      });
      //if the result Displayed is true and if the user pressed an operation key
    } else if (this.state.resultDisplayed === true && operationChars.indexOf(lastChar)!== -1) {
      currentString += e.target.value;
      this.setState({
        resultDisplayed: false,
        input: currentString
      }) //we need to keep adding to the string
    } else {
      this.setState({
        resultDisplayed: false,
        input: e.target.value
      })
    }
  }

  operatorButtonClick = (e) => {
    //if the input string is empty then return 
    let inputString = this.state.input;
    if (inputString.length === 0) return;

    //if the last character is an operator then replace it with the current operator
    let lastCharac = inputString[inputString.length - 1];
    let operationsKeys = Object.keys(operations);
    if (operationsKeys.indexOf(lastCharac) !== -1) {
      let newString = inputString.substring(0, inputString.length - 1) + e.target.value;
      this.setState({
        input: newString
      })
      //else add the operator to the input string
    } else {
      let newString = this.state.input + e.target.value;
      this.setState({
        input: newString
      })
    }    
  }

 

  equalsPressed = () => {
    if(this.state.input === '') return;
    let inputString = this.state.input;
    let numbers = inputString.split(/\+|-|×|÷/g);//array of numbers
    let operators = inputString.replace(/[0-9]|\./g, '').split('');//array of operators
    const operationChars = Object.keys(operations); //[+, -, ×, ÷]
    for (let i = 0; i < operationChars.length; i++) {
      let currentOperator = operationChars[i];
      let currentOperationFunction = operations[currentOperator];
      let indexOfOperationToExecute = operators.indexOf(currentOperator);
      while(indexOfOperationToExecute !== -1) {
        let currentResult = currentOperationFunction(numbers[indexOfOperationToExecute], numbers[indexOfOperationToExecute + 1]);
        numbers.splice(indexOfOperationToExecute, 2, currentResult);
        operators.splice(indexOfOperationToExecute, 1);
        indexOfOperationToExecute = operators.indexOf(currentOperator);
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
          <Buttons 
            numberButtonClick={this.numberButtonClick}
            operatorButtonClick={this.operatorButtonClick}
            equalsPressed={this.equalsPressed}
            clear={this.clear}
          />
        </div>
        <h5>Designed and Maintained by deepaligarg1001@gmail.com</h5>
      </div>
    );
  }
}

export default Calculator;
