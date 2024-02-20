import styleIcon from './icon.module.css';
interface PropsIcon {
  icon: JSX.Element;
  onClick?: () => void;
  variable?: 'crossWrap' | 'UserHeader'|'Heart';
}

const Icon = (props: PropsIcon) => {
  return (
    <div
      onClick={props.onClick}
      className={[
        styleIcon.icon,
        props.variable == 'crossWrap' && styleIcon.crossWrap,
        props.variable == 'UserHeader' && styleIcon.User,
        props.variable == 'Heart' && styleIcon.Heart,
      ].join(' ')}
    >
      {props.icon}
    </div>
  );
};
export default Icon;
