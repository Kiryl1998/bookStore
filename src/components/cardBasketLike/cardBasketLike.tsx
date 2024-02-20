import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IBook } from '../componentBook/componentBook';
import styleCardBasketLike from './cardBasketLike.module.css';
import { faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import Icon from '../icon/icon';
import { useEffect, useState } from 'react';
import { arrCards } from '../../localStore/localStore';
import Total from '../totalBasket/totalBasket';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { rootReducer } from '../../store/rootReducer';
import {
  delBasketCountIcon,
  iconBasketIcon,
} from '../../store/actions/countIconBasket';

const CardBasketLike = () => {
  const [cards, setCards] = useState(arrCards);
  const countBasketIcon = useAppSelector(
    (rootReducer) => rootReducer.reducerIconCountBasket
  );
  const dispatch = useAppDispatch();

  const handleIncrement = (card: IBook) => {
    setCards(
      cards.map((item) =>
        item.isbn13 == card.isbn13
          ? {
              ...item,
              count: item.count + 1,
              price:
                '$' +
                (
                  Number(item.price.replace('$', '')) +
                  Number(item.price.replace('$', '')) / item.count
                ).toFixed(2),
            }
          : item
      )
    );
  };
  const handleDecrement = (card: IBook) => {
    setCards(
      cards.map((item) =>
        item.isbn13 == card.isbn13
          ? {
              ...item,
              count: Math.max(item.count - 1, 1),
              price:
                item.count > 1
                  ? '$' +
                    (
                      Number(item.price.replace('$', '')) -
                      Number(item.price.replace('$', '')) / item.count
                    ).toFixed(2)
                  : item.price,
            }
          : item
      )
    );
  };

  const handleClickClose = (card: IBook) => {
    setCards(cards.filter((item) => card.isbn13 !== item.isbn13));
    const CloseCard = arrCards().filter(
      (item: IBook) => card.isbn13 != item.isbn13
    );
    localStorage.setItem('Basket', JSON.stringify(CloseCard));

    dispatch(delBasketCountIcon(card));
  };

  useEffect(() => {
    localStorage.setItem('Basket', JSON.stringify(cards));
  }, [cards]);

  return (
    <>
      {cards.map((cardBasket: IBook) => (
        <div
          key={cardBasket.isbn13}
          id={cardBasket.isbn13}
          className={styleCardBasketLike.wrapCard}
        >
          <div className={styleCardBasketLike.wrapContent}>
            <div className={styleCardBasketLike.wrapImg}>
              <img
                className={styleCardBasketLike.img}
                src={cardBasket.image}
                alt={cardBasket.title}
              />
            </div>
            <div className={styleCardBasketLike.wrapTitleSubTit}>
              <h2 className={styleCardBasketLike.title}>{cardBasket.title}</h2>
              <div>
                <p
                  className={styleCardBasketLike.subTitle}
                >{`${cardBasket.authors} ${cardBasket.year}`}</p>
              </div>
              <div className={styleCardBasketLike.wrapCount}>
                <Icon
                  onClick={() => {
                    handleDecrement(cardBasket);
                  }}
                  icon={
                    <FontAwesomeIcon
                      icon={faMinus}
                      className={styleCardBasketLike.icon}
                    />
                  }
                />
                <span className={styleCardBasketLike.count}>
                  {cardBasket.count}
                </span>
                <Icon
                  onClick={() => {
                    handleIncrement(cardBasket);
                  }}
                  icon={
                    <FontAwesomeIcon
                      icon={faPlus}
                      className={styleCardBasketLike.icon}
                    />
                  }
                />
              </div>
            </div>
          </div>
          <div className={styleCardBasketLike.wrapPriceClose}>
            <span className={styleCardBasketLike.price}>
              {cardBasket.price}
            </span>
            <Icon
              onClick={() => {
                handleClickClose(cardBasket);
              }}
              icon={
                <FontAwesomeIcon
                  icon={faXmark}
                  className={styleCardBasketLike.iconClose}
                />
              }
            />
          </div>
        </div>
      ))}
      <Total stateCards={cards} />
    </>
  );
};
export default CardBasketLike;
function dispatch(arg0: iconBasketIcon) {
  throw new Error('Function not implemented.');
}
