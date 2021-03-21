import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';


const Button = ({ children, disabled = false, ...rest }) => {
  return (
    <button className={`button ${disabled ? 'disabled' : ''}`} {...rest} disabled={disabled}>
      { children }
    </button>
  )
}

export default Button;

Button.propTypes = {
  disabled: PropTypes.bool
}

Button.defaultProps = {
  disabled: false
}