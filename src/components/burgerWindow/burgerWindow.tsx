import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icon from '../icon/icon';
import Input from '../input/input';
import { handleInputSearch } from '../swiperGrid/search';
import styleBurgerWindow from './burgerWindow.module.css';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { UserActive } from '../header/header';
import Button from '../button/button';

interface propsModal {
  active: boolean;
  variable?: 'Table';
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  stateMask: boolean;
  setMask: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerWindow = ({
  active,
  variable,
  setModal,
  stateMask,
  setMask,
}: propsModal) => {
  const navigation = useNavigate();
  const dispatch = useAppDispatch();

  const singInUser = () => {
    const localActiveUser: UserActive = JSON.parse(
      localStorage.getItem('UserActive')!
    );
    if (localActiveUser) {
      navigation('/Account');
      setMask(!stateMask);
      setModal(!active);
    } else {
      navigation('/SingIn');
      setMask(!stateMask);
      setModal(!active);
    }
  };
  const handleLogUot = () => {
    const localActiveUser: UserActive = JSON.parse(
      localStorage.getItem('UserActive')!
    );
    if (localActiveUser) {
      localStorage.removeItem('UserActive');
      navigation('/SingIn');
      setModal(!active);
      setMask(!stateMask);
    } else {
      navigation('/SingIn');
      setModal(!active);
      setMask(!stateMask);
    }
  };
  return (
    <div
      className={[
        styleBurgerWindow.wrap,
        active ? styleBurgerWindow.active : null,
        styleBurgerWindow.Table,
      ].join(' ')}
    >
      <Icon
        variable="crossWrap"
        onClick={() => {
          setModal(!active);
          setMask(!stateMask);
        }}
        icon={
          <FontAwesomeIcon icon={faXmark} className={styleBurgerWindow.cross} />
        }
      />
      <Input
        variable="modalInput"
        onInput={(event) => handleInputSearch(event, navigation, dispatch)}
        placeholder={'Search'}
        icon={
          <Icon
            icon={
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className={styleBurgerWindow.icon}
              />
            }
          />
        }
      />
      <span
        onClick={() => {
          singInUser();
        }}
        className={styleBurgerWindow.buttonLink}
      >
        Account
      </span>
      <span
        className={[
          styleBurgerWindow.buttonLink,
          styleBurgerWindow.unActive,
        ].join(' ')}
        onClick={() => {
          navigation('/Favorite');
          setMask(!stateMask);
        }}
      >
        Favorite
      </span>
      <span
        className={[
          styleBurgerWindow.buttonLink,
          styleBurgerWindow.unActive,
        ].join(' ')}
        onClick={() => {
          navigation('/Basket');
          setMask(!stateMask);
        }}
      >
        Basket
      </span>
      {localStorage.getItem('UserActive') ? (
        <Button
          type="logOut"
          onClick={() => {
            handleLogUot();
          }}
          btnText={'LOG UOT'}
        />
      ) : (
        <Button
          type="logOut"
          onClick={() => {
            handleLogUot();
          }}
          btnText={'SING IN'}
        />
      )}
    </div>
  );
};
export default BurgerWindow;
