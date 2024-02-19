import { useNavigate } from 'react-router-dom';
import Icon from '../icon/icon';
import styleSectionBasket from './sectionBasket.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

interface PropsSectionBasket {
  card: JSX.Element;
  swiper?: JSX.Element;
}

const SectionBasket = (props: PropsSectionBasket) => {
  const navigation = useNavigate();
  return (
    <section className={styleSectionBasket.basket}>
      <div className={styleSectionBasket.container}>
        <div className={styleSectionBasket.wrap}>
          <Icon
            onClick={() => {
              navigation('/bookStore');
            }}
            icon={
              <FontAwesomeIcon
                icon={faArrowLeftLong}
                className={styleSectionBasket.iconArrow}
              />
            }
          />
          <h2 className={styleSectionBasket.title}>Your cart</h2>
          {props.card}
          {props.swiper}
        </div>
      </div>
    </section>
  );
};
export default SectionBasket;
