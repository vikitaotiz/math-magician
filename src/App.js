import React, { Component } from 'react';
import Calculator from "./components/Calculator";

export class App extends Component {
  render() {
    return (
      <div className='container'>
        <Calculator />
      </div>
    )
  }
}

export default App;
