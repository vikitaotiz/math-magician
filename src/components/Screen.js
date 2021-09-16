import propTypes from 'prop-types';

const Screen = ({ total, operation, next }) => {
  const totalVal = Number(total);
  console.log(typeof total)
  return (
    <div className="screen">
      {`${totalVal} ${operation ? operation : ''} ${next ? next : ''}`}
    </div>
  );
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

export default Screen
