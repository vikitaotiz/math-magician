import React, { Component } from 'react';
import Screen from './Screen';
import Numpad from './Numpad';

class Calculator extends Component {
    render() {
        return (
            <div>
                <Screen />
                <Numpad />
            </div>
        );
    }
}

export default Calculator;
