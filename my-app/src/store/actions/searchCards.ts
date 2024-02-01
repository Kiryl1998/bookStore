import { IBook } from '../../components/componentBook/componentBook';
import { store } from '../store';

export const SHOW_SEARCH = 'SHOW_SEARCH';

interface showSearchAction {
  type: typeof SHOW_SEARCH;
  payload: IBook[];
}
export const showSearchCards = (cards: IBook[]): showSearchAction => ({
  type: SHOW_SEARCH,
  payload: cards,
});

export const fetchSearchCards =
  (text: string) => async (dispatch: typeof store.dispatch) => {
    const response = await fetch(`https://api.itbook.store/1.0/search/${text}`);
    const data = await response.json();
    const books = data.books;

    dispatch(showSearchCards(books));
  };
