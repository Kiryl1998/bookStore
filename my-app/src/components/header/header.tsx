import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icon from '../icon/icon';
import Input from '../input/input';
import styleHeader from './header.module.css';
import {
  faBasketShopping,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import {
  faHeart as regularHeart,
  faUser as regularUser,
} from '@fortawesome/free-regular-svg-icons';
import styleInput from '../input/input.module.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigation = useNavigate();
  return (
    <header className={styleHeader.header}>
      <div className={styleHeader.container}>
        <div className={styleHeader.wrap}>
          <h2
            className={styleHeader.title}
            onClick={() => {
              navigation('/');
            }}
          >
            bookstore
          </h2>
          <Input
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
            <Icon icon={<FontAwesomeIcon icon={regularHeart} />} />
            <Icon
              onClick={() => {
                navigation('/Basket');
              }}
              icon={<FontAwesomeIcon icon={faBasketShopping} />}
            />
            <Icon
              onClick={() => {
                navigation('/SingIn');
              }}
              icon={<FontAwesomeIcon icon={regularUser} />}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
