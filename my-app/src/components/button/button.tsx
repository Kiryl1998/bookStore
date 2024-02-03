import styleButton from './button.module.css';

interface PropsButton {
  btnText: string;
  type?: 'addToCart' | 'singIn' | 'total';
  onClick?: () => void;
}

const Button = (props: PropsButton) => {
  return (
    <button
      onClick={props.onClick}
      className={[
        styleButton.btn,
        props.type == 'addToCart' && styleButton.addToCart,
        props.type == 'singIn' && styleButton.singIn,
        props.type == 'total' && styleButton.total,
      ].join(' ')}
    >
      {props.btnText}
    </button>
  );
};
export default Button;
