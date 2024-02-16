import styleButton from './button.module.css';
import React from 'react';

interface PropsButton {
  btnText: string;
  type?: 'addToCart' | 'singIn' | 'total' | 'Save changes' | 'Cancel';
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
        props.type == 'Save changes' && styleButton.SaveChanges,
        props.type == 'Cancel' && styleButton.Cancel,
      ].join(' ')}
    >
      {props.btnText}
    </button>
  );
};
export default Button;