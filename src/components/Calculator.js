import { useState } from 'react';
import Screen from './Screen';
import Numpad from './Numpad';
import Calculate from '../logic/calculate';

const Calculator = () => {
  const [obj, setState] = useState({ total: null, next: null, operation: null });
  
  const onKeyPress = (data) => {
    setState(Calculate(obj, data));
  }

  return (
      <div>
        <Screen total={obj.total} operation={obj.operation} next={obj.next} />
        <Numpad onKeyPress={onKeyPress} />
      </div>
    );
}

export default Calculator
