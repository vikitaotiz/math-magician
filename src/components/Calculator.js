import { useState } from 'react';
import Screen from './Screen';
import Numpad from './Numpad';
import Calculate from '../logic/calculate';

const Calculator = () => {
  const [obj, setState] = useState({ total: null, next: null, operation: null });

  const onKeyPress = (data) => {
    setState(Calculate(obj, data));
  };

  return (
    <div className="calculator">
      <div>
        <h3>Let us do some Math!</h3>
        <hr />
        <p className="wrap">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <div>
        <Screen total={obj.total} operation={obj.operation} next={obj.next} />
        <Numpad onKeyPress={onKeyPress} />
      </div>
    </div>
  );
};

export default Calculator;
