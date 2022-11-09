import { useReducer } from 'react';

import styles from './Input.module.css';

const inputReducer = (state, action) => {};

const Input = (props) => {
  // props: label, element, id, placeholder, onChange, onBlur, type (*input), rows/cols(*textarea)

  const [inputState, dispatch] = useReducer(inputReducer, {});

  const element =
    props.element === 'textarea' ? (
      <textarea
        id={props.id}
        placeholder={props.placeholder}
        rows={props.rows}
        cols={props.cols}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    ) : (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    );
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
    </div>
  );
};

export default Input;
