import propTypes from 'prop-types';
import btnStyle from './Button.module.css';

function Button({ text }) {
  return <button className={btnStyle.btn}>{text}</button>;
}

Button.propTypes = {
  text: propTypes.string.isRequired,
};
export default Button;
