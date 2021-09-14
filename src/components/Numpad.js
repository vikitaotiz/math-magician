import React, { Component } from 'react';

class Numpad extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div>
        <table>
          <tr>
            <td>AC</td>
            <td>+/-</td>
            <td>%</td>
            <td className='operator'>&divide;</td>
          </tr>
          <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
              <td className='operator'>x</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td className='operator'>-</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td className='operator'>+</td>
          </tr>
          <tr>
            <td colSpan='2'>0</td>
            <td>.</td>
            <td className='operator'>=</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Numpad
