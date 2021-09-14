import React, { Component } from 'react';
import Screen from './Screen';
import Numpad from './Numpad';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
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
