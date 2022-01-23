import propTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ text, onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: propTypes.string.isRequired,
  onClick: propTypes.func,
};

export default Button;
