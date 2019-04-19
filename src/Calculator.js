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

    //if the input is just a number then pressing equals does nothing
    if(Number(inputString)) return;
    
    //else figure out the answer
    let numbers = inputString.split(/\+|-|×|÷/g);//array of numbers
    let operators = inputString.replace(/[0-9]|\./g, '').split('');//array of operators    
    const operationChars = Object.keys(operations); //[÷, ×, +, -]

    for (let i = 0; i < operationChars.length; i++) {
      let currentOperator = operationChars[i];  //will start with ÷
      let currentOperationFunction = operations[currentOperator]; //get the function associated with the operator
      let indexOfOperationToExecute = operators.indexOf(currentOperator);
      while(indexOfOperationToExecute !== -1) {
        let currentResult = currentOperationFunction(numbers[indexOfOperationToExecute], numbers[indexOfOperationToExecute + 1]);
        numbers.splice(indexOfOperationToExecute, 2, currentResult);
        operators.splice(indexOfOperationToExecute, 1);
        indexOfOperationToExecute = operators.indexOf(currentOperator);
      }       
    }
    
    // let result = numbers[0]; //it is a string
    let result = '' + numbers[0];
    //if the result is a long decimal
    let MAXLENGTH = 13;
    if (result.length > MAXLENGTH) {
      //show the rounded value so length of string displayed is 13
      let truncatedResult = result.substring(0, MAXLENGTH + 2) //get till the 14th place
      if (Number(truncatedResult[truncatedResult.length - 1]) >= 5) {
        let lastDigit = Number(truncatedResult[truncatedResult.length - 1]);
        lastDigit++;
        result = truncatedResult.substring(0, MAXLENGTH - 1) + lastDigit;
      }
    }    
    //set the state
    this.setState({
      input: result,
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
