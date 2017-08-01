import React from 'react';

const TextInput = ({ text, type = 'text', changeHandler, value, error }) => (
  <label>
    {text}:
    {error}
    <input
      type={type}
      onChange={changeHandler}
      value={value} />
  </label>
);

export default TextInput;
