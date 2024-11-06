import React from 'react';

const Button = ({ text, onClick, style }) => (
  <button
    onClick={onClick}
    style={{ padding: '10px 20px', fontSize: '1rem', cursor: 'pointer', ...style }}
  >
    {text}
  </button>
);

export default Button;