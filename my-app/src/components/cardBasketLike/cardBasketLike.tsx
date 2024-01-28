import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { localStorageBasket } from '../../localStorage/Basket';
import { IBook } from '../componentBook/componentBook';
import styleCardBasketLike from './cardBasketLike.module.css';
import { faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import Icon from '../icon/icon';
import { useEffect, useState } from 'react';

const CardBasketLike = () => {
  const [cards, setCard] = useState(localStorageBasket);

  const handleClickClose = (cardBasket: IBook) => {
    setCard(cards.filter((item: IBook) => (item ? item !== cardBasket : [])));
    
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
                  icon={
                    <FontAwesomeIcon
                      icon={faMinus}
                      className={styleCardBasketLike.icon}
                    />
                  }
                />
                <span className={styleCardBasketLike.count}>1</span>
                <Icon
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
                  className={styleCardBasketLike.icon}
                />
              }
            />
          </div>
        </div>
      ))}
    </>
  );
};
export default CardBasketLike;
