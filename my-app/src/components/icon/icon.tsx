import styleIcon from './icon.module.css';
interface PropsIcon {
  icon: JSX.Element;
  onClick?: () => void;
}

const Icon = (props: PropsIcon) => {
  return (
    <div onClick={props.onClick} className={styleIcon.icon}>
      {props.icon}
    </div>
  );
};
export default Icon;
