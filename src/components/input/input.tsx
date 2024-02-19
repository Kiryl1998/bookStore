import styleInput from './input.module.css';

interface PropsInput {
  placeholder: string;
  icon?: JSX.Element;
  onInput?: (event: any) => void;
  variable?: 'modalInput' | 'headerInput';
}
const Input = (props: PropsInput) => {
  return (
    <div
      className={[
        styleInput.wrap,
        props.variable == 'modalInput' && styleInput.modalInput,
        props.variable == 'headerInput' && styleInput.headerInput,
      ].join(' ')}
    >
      {props.icon}
      <input
        onInput={props.onInput}
        placeholder={props.placeholder}
        className={[
          styleInput.input
        ].join(' ')}
        type="text"
      />
    </div>
  );
};
export default Input;
