import propTypes from 'prop-types';
import React, { Component } from 'react';

class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { total, operation, next } = this.props;
    return (
      <div className="screen">
        {`${total || ''} ${operation || ''} ${next || ''}`}
      </div>
    );
  }
}

Screen.propTypes = {
  total: propTypes.string.isRequired,
  operation: propTypes.string.isRequired,
  next: propTypes.string.isRequired,
};

export default Screen;
