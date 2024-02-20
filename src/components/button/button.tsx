import styleButton from './button.module.css';

interface PropsButton {
  btnText: string;
  variable?:
    | 'addToCart'
    | 'singIn'
    | 'total'
    | 'Save changes'
    | 'Cancel'
    | 'Subscribe'
    | 'logOut';
  onClick?: () => void;
  type?: string;
}

const Button = (props: PropsButton) => {
  return (
    <button
      onClick={props.onClick}
      className={[
        styleButton.btn,
        props.variable == 'addToCart' && styleButton.addToCart,
        props.variable == 'singIn' && styleButton.singIn,
        props.variable == 'total' && styleButton.total,
        props.variable == 'Save changes' && styleButton.SaveChanges,
        props.variable == 'Cancel' && styleButton.Cancel,
        props.variable == 'Subscribe' && styleButton.Subscribe,
        props.variable == 'logOut' && styleButton.logOut,
      ].join(' ')}
    >
      {props.btnText}
    </button>
  );
};
export default Button;
