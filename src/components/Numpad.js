import React, { Component } from 'react'

export class Numpad extends Component {
    render() {
        return (
            <div>
            <table>
                <tr>
                    <td>AC</td>
                    <td>+/-</td>
                    <td>%</td>
                    <td class="operator">&divide;</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td class="operator">x</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td class="operator">-</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td class="operator">+</td>
                </tr>
                <tr>
                    <td colspan="2">0</td>
                    <td>.</td>
                    <td class="operator">=</td>
                </tr>
          </table> 
        </div>
        )
    }
}

export default Numpad
