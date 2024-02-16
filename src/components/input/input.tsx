import { useState } from 'react';
import styleInput from './input.module.css';

interface PropsInput {
  placeholder: string;
  icon?: JSX.Element;
  onInput?: (event: any) => void;
  
}
const Input = (props: PropsInput) => {
  return (
    <div className={styleInput.wrap}>
      {props.icon}
      <input
        onInput={props.onInput}
        placeholder={props.placeholder}
        className={styleInput.input}
        type="text"
      />
    </div>
  );
};
export default Input;
