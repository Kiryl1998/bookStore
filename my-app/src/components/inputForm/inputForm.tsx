import styleInputForm from './inputForm.module.css';

interface propsInputForm {
  label: string;
  placeholder: string;
  subInput?:string
  type:string
}

const InputForm = (props: propsInputForm) => {
  return (
    <div className={styleInputForm.wrapInputForm}>
      <label className={styleInputForm.label}>{props.label}</label>
      <input  className={styleInputForm.input} placeholder={props.placeholder} type={props.type} />
      <span className={styleInputForm.subInput}>{props.subInput}</span>
    </div>
  );
};
export default InputForm;
