import React, { Component } from 'react';
import Screen from './Screen';
import Numpad from './Numpad';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  onKeyPress = (data) => {
    this.setState((obj) => calculate(obj, data));
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <div>
          <Screen total={total} operation={operation} next={next}/>
          <Numpad onKeyPress={this.onKeyPress} />
      </div>
    );
  }
}

export default Calculator;
