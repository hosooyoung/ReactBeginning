import PropType from 'prop-types';
import styled from './Button.module.css';
function Button({ text }) {
  return <button className={styled.tbutton}>{text}</button>;
}

Button.propType = {
  text: PropType.string.isRequired,
};

export default Button;
