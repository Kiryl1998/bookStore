import styleButton from './button.module.css';

interface PropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
}

const Button = (props: PropsButton) => {
  return (
    <button
      type={props.type}
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
