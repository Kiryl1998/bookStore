import styleIcon from './icon.module.css';
interface PropsIcon {
  icon: JSX.Element;
  onClick?: () => void;
  variable?: 'crossWrap';
}

const Icon = (props: PropsIcon) => {
  return (
    <div
      onClick={props.onClick}
      className={[styleIcon.icon, props.variable == 'crossWrap'&&styleIcon.crossWrap].join(' ')}
    >
      {props.icon}
    </div>
  );
};
export default Icon;
