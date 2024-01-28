import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../button/button';
import Tabs from '../tabs/tabs';
import styleComponentBook from './componentBook.module.css';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import Icon from '../icon/icon';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchBook } from '../../store/actions/BookAction';
import { RootState } from '../../store/store';
import { Rating } from 'react-simple-star-rating';
import { setLocalStorageBasket } from '../../localStorage/Basket';

export interface IBook {
  authors: string;
  desc: string;
  error: string;
  image: string;
  isbn10: string;
  isbn13: string;
  language: string;
  pages: string;
  price: string;
  publisher: string;
  rating: string;
  subtitle: string;
  title: string;
  url: string;
  year: string;
  pdf?: {
    'Chapter 2': string;
    'Chapter 5': string;
  };
}

const ComponentBook = () => {
  const bookContent = useAppSelector(
    (RootReducer: RootState) => RootReducer.bookReducer.book
  ) as IBook;
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBook(id));
  }, []);

  return (
    <>
      <h1 className={styleComponentBook.title}>{bookContent.title}</h1>
      <div className={styleComponentBook.wrapBook}>
        <div className={styleComponentBook.wrapImgBook}>
          <Icon
            icon={
              <FontAwesomeIcon
                icon={regularHeart}
                className={styleComponentBook.likeImg}
              />
            }
          />
          <img
            className={styleComponentBook.img}
            src={bookContent.image}
            alt={bookContent.title}
          />
        </div>
        <div className={styleComponentBook.wrapContent}>
          <div className={styleComponentBook.wrapPriceRating}>
            <div className={styleComponentBook.price}>{bookContent.price}</div>
            <div className={styleComponentBook.rating}>
              <Rating initialValue={Number(bookContent.rating)} />
            </div>
          </div>
          <div className={styleComponentBook.wrapItem}>
            <ul className={styleComponentBook.item}>
              <li className={styleComponentBook.itemList}>Authors</li>
              <li className={styleComponentBook.itemList}>Publisher</li>
              <li className={styleComponentBook.itemList}>Language</li>
              <li className={styleComponentBook.itemList}>Format</li>
            </ul>
            <ul className={styleComponentBook.item}>
              <li className={styleComponentBook.itemListDis}>
                {bookContent.authors}
              </li>
              <li className={styleComponentBook.itemListDis}>
                {bookContent.publisher}
              </li>
              <li className={styleComponentBook.itemListDis}>
                {bookContent.language}
              </li>
              <li className={styleComponentBook.itemListDis}>
                <a href={bookContent.pdf?.['Chapter 2']}>
                  Paper book / ebook (PDF)
                </a>
              </li>
            </ul>
          </div>
          <div className={styleComponentBook.moreDetailse}>
            <span>More details</span>
            <Icon icon={<FontAwesomeIcon icon={faChevronDown} />} />
          </div>
          <Button
            onClick={() => setLocalStorageBasket(bookContent)}
            type="addToCart"
            btnText={'add to cart'}
          />

          <span className={styleComponentBook.previewBook}>Preview book</span>
        </div>
      </div>
      <Tabs />
      <div className={styleComponentBook.wrapDescription}>
        <p>{bookContent.desc}</p>
      </div>
    </>
  );
};
export default ComponentBook;
