import React from 'react';

const Input = ({ type = "text", placeholder, value, onChange }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    style={{ padding: '8px', fontSize: '1rem', margin: '5px 0' }}
  />
);

export default Input;