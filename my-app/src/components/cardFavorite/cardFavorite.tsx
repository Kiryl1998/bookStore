import { useState } from 'react';
import { arrCardsFavorite } from '../../localStore/localStoreFavorite';
import styleCardFavorite from './cardFavorite.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IBook } from '../componentBook/componentBook';
import Icon from '../icon/icon';
import RatingStart from '../rating/rating';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
const CardFavorite = () => {
  const [cards, setCards] = useState(arrCardsFavorite);

  const handleClickClose = (card: IBook) => {
    setCards(cards.filter((item) => card.isbn13 !== item.isbn13));
    const CloseCard = arrCardsFavorite().filter(
      (item: IBook) => card.isbn13 != item.isbn13
    );
    localStorage.setItem('Favorite', JSON.stringify(CloseCard));
  };
  return (
    <>
      {cards.map((itemFavorite) => (
        <div key={itemFavorite.isbn13} className={styleCardFavorite.wrapCard}>
          <div className={styleCardFavorite.wrapContent}>
            <div className={styleCardFavorite.wrapImg}>
              <img
                className={styleCardFavorite.img}
                src={itemFavorite.image}
                alt={itemFavorite.title}
              />
            </div>
            <div className={styleCardFavorite.wrapTitleSubTit}>
              <h2 className={styleCardFavorite.title}>{itemFavorite.title}</h2>
              <div>
                <p
                  className={styleCardFavorite.subTitle}
                >{`${itemFavorite.authors} ${itemFavorite.year}`}</p>
              </div>
              <div className={styleCardFavorite.wrapPriceRating}>
                <span className={styleCardFavorite.price}>
                  {itemFavorite.price}
                </span>
                <RatingStart rating={Number(itemFavorite.rating)} />
              </div>
            </div>
          </div>
          <div className={styleCardFavorite.wrapPriceClose}>
            <Icon
              onClick={() => {
                handleClickClose(itemFavorite);
              }}
              icon={
                <FontAwesomeIcon
                  icon={faHeart}
                  className={styleCardFavorite.icon}
                />
              }
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default CardFavorite;
