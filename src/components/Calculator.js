import React from 'react'
import Screen from './Screen'
import Numpad from './Numpad'
import Operators from './Operators'

const Calculator = () => {
    return (
        <div>
            <Screen />
            <Numpad />
            <Operators />
        </div>
    )
}

export default Calculator
