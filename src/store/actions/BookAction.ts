import { IBook } from '../../components/componentBook/componentBook';
import { store } from '../store';

export const showBook = (book: {}) => ({
  type: 'SHOW_BOOK',
  payload: book,
});
export const setLikeCard = (book: IBook) => ({
  type: 'SET_LIKE',
  payload: book,
});
export const getLikeCard = (book: IBook) => ({
  type: 'GET_LIKE',
  payload: book,
});


export const fetchBook =
  (id: string | undefined, cards: IBook[]) =>
  async (dispatch: typeof store.dispatch) => {
    const response = await fetch(`https://api.itbook.store/1.0/books/${id}`);
    const data = await response.json();
    const book = data;
    if (cards != null) {
      const saveCardLike = cards.find((item) => item.isbn13 === id);
      console.log(saveCardLike?.favorite);
      if (saveCardLike != undefined) {
        if (saveCardLike != null) {
          dispatch(setLikeCard(saveCardLike));
        }
      } else {
        dispatch(showBook(book));
      }
    } else {
      dispatch(showBook(book));
    }
  };
