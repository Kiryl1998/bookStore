import { useNavigate } from 'react-router-dom';
import CardBasketLike from '../cardBasketLike/cardBasketLike';
import Icon from '../icon/icon';
import styleSectionBasket from './sectionBasket.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import Total from '../totalBasket/totalBasket';

const SectionBasket = () => {
  const navigation = useNavigate();
  return (
    <section className={styleSectionBasket.basket}>
      <div className={styleSectionBasket.container}>
        <div className={styleSectionBasket.wrap}>
          <Icon
            onClick={() => {
              navigation('/');
            }}
            icon={
              <FontAwesomeIcon
                icon={faArrowLeftLong}
                className={styleSectionBasket.iconArrow}
              />
            }
          />
          <h2 className={styleSectionBasket.title}>Your cart</h2>
          <CardBasketLike />
          <Total />
        </div>
      </div>
    </section>
  );
};
export default SectionBasket;
