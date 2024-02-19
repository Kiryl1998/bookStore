import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icon from '../icon/icon';
import Input from '../input/input';
import styleHeader from './header.module.css';
import {
  faBars,
  faBasketShopping,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import {
  faHeart as regularHeart,
  faUser as regularUser,
} from '@fortawesome/free-regular-svg-icons';
import styleInput from '../input/input.module.css';
import { useNavigate } from 'react-router-dom';
import { handleInputSearch } from '../swiperGrid/search';
import { useAppDispatch } from '../../store/hooks';
import BurgerWindow from '../burgerWindow/burgerWindow';
import { useState } from 'react';

export interface UserActive {
  email: string;
  password: string;
  activeUser: boolean;
}
interface PropsHeader {
  stateMask: boolean;
  setMask: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ stateMask, setMask }: PropsHeader) => {
  const navigation = useNavigate();
  const dispatch = useAppDispatch();

  const [modal, setModal] = useState(false);

  return (
    <header className={styleHeader.header}>
      <div className={styleHeader.container}>
        <div className={styleHeader.wrap}>
          <h2
            className={styleHeader.title}
            onClick={() => {
              navigation('/bookStore');
            }}
          >
            bookstore
          </h2>
          <Input
            variable="headerInput"
            onInput={(event) => handleInputSearch(event, navigation, dispatch)}
            placeholder={'Search'}
            icon={
              <Icon
                icon={
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className={styleInput.icon}
                  />
                }
              />
            }
          />
          <div className={styleHeader.wrapIcon}>
            <Icon
              onClick={() => {
                navigation('/Favorite');
              }}
              icon={
                <FontAwesomeIcon
                  icon={regularHeart}
                  className={[styleHeader.iconHeader, styleHeader.none].join(
                    ' '
                  )}
                />
              }
            />

            <Icon
              onClick={() => {
                navigation('/Basket');
              }}
              icon={
                <FontAwesomeIcon
                  icon={faBasketShopping}
                  className={styleHeader.iconHeader}
                />
              }
            />
            <FontAwesomeIcon
              onClick={() => {
                setModal(!modal);
                setMask(!stateMask);
              }}
              icon={faBars}
              className={[styleHeader.iconHeader, styleHeader.active].join(' ')}
            />
            <Icon
              onClick={() => {
                setModal(!modal);
              }}
              icon={
                <FontAwesomeIcon
                  icon={regularUser}
                  className={[styleHeader.iconHeader, styleHeader.none].join(
                    ' '
                  )}
                />
              }
            />
            <BurgerWindow active={modal} setModal={setModal} stateMask={stateMask} setMask={setMask} />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
