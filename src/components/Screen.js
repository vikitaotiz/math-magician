import React, { Component } from 'react';

class Screen extends Component {
  render() {
    return (
      <div className="screen">
        {this.props.total} {this.props.operation} {this.props.next}
      </div>
    );
  }
}

export default Screen;