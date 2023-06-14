import PropTypes from 'prop-types';

const Error = ({error}) => {
  return <div className='quote-container error-container'>{error.error}</div>;
};

Error.propTypes = {
  error: PropTypes.object.isRequired,
};


export default Error;
