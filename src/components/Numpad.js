import propTypes from 'prop-types';

const Numpad = ({ onKeyPress }) => {
  const btnClick = (e) => {
    const { innerHTML } = e.target;
    onKeyPress(innerHTML);
  };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td><button type="button" onClick={btnClick} className="btn">AC</button></td>
            <td><button type="button" onClick={btnClick} className="btn">+/-</button></td>
            <td><button type="button" onClick={btnClick} className="btn">%</button></td>
            <td><button type="button" onClick={btnClick} className="operator">/</button></td>
          </tr>
          <tr>
            <td><button type="button" onClick={btnClick} className="btn">7</button></td>
            <td><button type="button" onClick={btnClick} className="btn">8</button></td>
            <td><button type="button" onClick={btnClick} className="btn">9</button></td>
            <td><button type="button" onClick={btnClick} className="operator">x</button></td>
          </tr>
          <tr>
            <td><button type="button" onClick={btnClick} className="btn">4</button></td>
            <td><button type="button" onClick={btnClick} className="btn">5</button></td>
            <td><button type="button" onClick={btnClick} className="btn">6</button></td>
            <td><button type="button" onClick={btnClick} className="operator">-</button></td>
          </tr>
          <tr>
            <td><button type="button" onClick={btnClick} className="btn">1</button></td>
            <td><button type="button" onClick={btnClick} className="btn">2</button></td>
            <td><button type="button" onClick={btnClick} className="btn">3</button></td>
            <td><button type="button" onClick={btnClick} className="operator">+</button></td>
          </tr>
          <tr>
            <td colSpan="2"><button type="button" onClick={btnClick} className="btn">0</button></td>
            <td><button type="button" onClick={btnClick} className="btn">.</button></td>
            <td><button type="button" onClick={btnClick} className="operator">=</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Numpad.propTypes = {
  onKeyPress: propTypes.func.isRequired,
};

export default Numpad;
