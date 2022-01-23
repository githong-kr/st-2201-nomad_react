import propTypes from 'prop-types';

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

Button.propTypes = {
  text: propTypes.string.isRequired,
  onClick: propTypes.func,
};

export default Button;
