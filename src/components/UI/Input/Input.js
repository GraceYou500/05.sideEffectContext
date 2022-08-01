import React, { useRef, useImperativeHandle } from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  // this is the ref if the ref should be set from outside.
  //Input is still a React component, but it is now capable be bound to a ref.
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate, // you can only use what you expose here through useImperativeHandle
    };
  });

  // with useImperativeHandle and React.forwardRef, you can expose functionalities from a React component to its parent component to then use the component to the parent component through refs, and trigger certain functionalities.

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;

// the Input can take a ref prop from parent (Login) component
