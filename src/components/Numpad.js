import React, { Component } from 'react';
import propTypes from 'prop-types';

class Numpad extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  btnClick = (e) => {
    const { innerHTML } = e.target;
    const { onKeyPress } = this.props;
    onKeyPress(innerHTML);
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td onClick={this.btnClick}>AC</td>
              <td onClick={this.btnClick}>+/-</td>
              <td onClick={this.btnClick}>%</td>
              <td onClick={this.btnClick} className="operator">&divide;</td>
            </tr>
            <tr>
              <td onClick={this.btnClick}>7</td>
              <td onClick={this.btnClick}>8</td>
              <td onClick={this.btnClick}>9</td>
              <td onClick={this.btnClick} className="operator">x</td>
            </tr>
            <tr>
              <td onClick={this.btnClick}>4</td>
              <td onClick={this.btnClick}>5</td>
              <td onClick={this.btnClick}>6</td>
              <td onClick={this.btnClick} className="operator">-</td>
            </tr>
            <tr>
              <td onClick={this.btnClick}>1</td>
              <td onClick={this.btnClick}>2</td>
              <td onClick={this.btnClick}>3</td>
              <td onClick={this.btnClick} className="operator">+</td>
            </tr>
            <tr>
              <td onClick={this.btnClick} colSpan="2">0</td>
              <td onClick={this.btnClick}>.</td>
              <td onClick={this.btnClick} className="operator">=</td>
            </tr>          
          </tbody>
        </table>
      </div>
    );
  }
}

Numpad.propTypes = {
  onKeyPress: propTypes.func.isRequired
}

export default Numpad;
