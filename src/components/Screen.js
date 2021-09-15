import propTypes from 'prop-types';
import React, { Component } from 'react';

class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { total, operation, next } = this.props;
    const totalVal = Number(total);
    return (
      <div className="screen">
        {`${totalVal || ''} ${operation || ''} ${next || ''}`}
      </div>
    );
  }
}

Screen.propTypes = {
  total: propTypes.number,
  operation: propTypes.string,
  next: propTypes.string,
};

Screen.defaultProps = {
  total: 0,
  operation: '',
  next: '',
};

export default Screen;
