import styleInput from './input.module.css';

interface PropsInput {
  placeholder: string;
  icon?: JSX.Element;
}
const Input = (props: PropsInput) => {
  return (
    <div className={styleInput.wrap}>
      {props.icon}
      <input
        placeholder={props.placeholder}
        className={styleInput.input}
        type="text"
      />
    </div>
  );
};
export default Input;
