import React from 'react';
import './Input.css';

const Input = (props) => {
  return (
    <form>
      <label>
        <input type='text' name='name' value={props.input} />
      </label>
    </form>
  );
}

export default Input;