import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icon from '../icon/icon';
import Input from '../input/input';
import { handleInputSearch } from '../swiperGrid/search';
import styleBurgerWindow from './burgerWindow.module.css';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';

const BurgerWindow = () => {
  const navigation = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <div className={styleBurgerWindow.wrap}>
      <Input
        onInput={(event) => handleInputSearch(event, navigation, dispatch)}
        placeholder={'Search'}
        icon={<Icon icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />}
      />
    </div>
  );
};
export default BurgerWindow
