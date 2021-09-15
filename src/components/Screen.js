import React, { Component } from 'react';

class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="screen">
        {this.props.total} {this.props.operation} {this.props.next}
      </div>
    );
  }
}

export default Screen;