import Big from 'big.js';

const Operate = (num1, op, num2) => {
  let result = 0;
  const operations = ['+', '-', '*', '/', '%'];
  if (!num2 && op !== '%') return num1;
  if (!num1) return 'Error';
  const n1 = new Big(num1);
  const n2 = new Big(num2);

  if (operations.includes(op)) {
    switch (op) {
      case '-':
        result = n1.minus(n2);
        break;
      case '+':
        result = n1.plus(n2);
        break;
      case '*':
        result = n1.times(n2);
        break;
      case '/':
        try {
          result = n1.div(n2);
        } catch (error) {
          result = 'Infinity';
        }
        break;
      case '%':
        result = n1.div(100);
        break;
      default:
        result = 0;
    }
    return result.toString();
  }

  return 'Error';
};

export default Operate;
