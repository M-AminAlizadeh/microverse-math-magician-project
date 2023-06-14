import calculate from './logic/calculate';
import PropTypes from 'prop-types';

const Button = ({ obj, setObj, value, classList }) => {
  const handleInput = (e) => {
    setObj(calculate(obj, e.target.innerText));
  };

  return (
    <button
    className={classList}
    onClick={(e) => {
      handleInput(e);
    }}>
      {value}
    </button>
  );
};

Button.propTypes = {
  obj: PropTypes.object.isRequired,
  setObj : PropTypes.object.isRequired,
  value : PropTypes.object.isRequired,
  classList : PropTypes.object.isRequired,
};

export default Button;
