import propTypes from 'prop-types';

const Screen = ({ total, operation, next }) => {
  const totalVal = Number(total);

  return (
    <div className="screen">
      {`${totalVal} ${operation || ''} ${next || ''}`}
    </div>
  );
};

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
