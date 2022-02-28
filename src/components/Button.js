import React from 'react';

function Button({ label, style, leftIcon, rightIcon, onClick, className }) {
  return (
    <button
      type="button"
      style={style}
      className={`btn ${className}`}
      onClick={onClick}
    >
      {leftIcon && leftIcon}
      {label && label}
      {rightIcon && rightIcon}
    </button>
  );
}

export default Button;
