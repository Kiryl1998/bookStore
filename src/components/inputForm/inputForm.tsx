import styleInputForm from './inputForm.module.css';
import { InputHTMLAttributes } from 'react';

interface propsInputForm {
  label: string;
  placeholder: string;
  subInput?: string;
  type: string;
  variable?: 'account';
}
interface propsInput extends InputHTMLAttributes<HTMLInputElement> {}

const InputForm = (props: propsInputForm, input: propsInput) => {
  return (
    <div className={styleInputForm.wrapInputForm}>
      <label className={styleInputForm.label}>{props.label}</label>
      <input
        className={styleInputForm.input}
        placeholder={props.placeholder}
        type={props.type}
      />
      <span className={styleInputForm.subInput}>{props.subInput}</span>
    </div>
  );
};
export { InputForm, styleInputForm };
