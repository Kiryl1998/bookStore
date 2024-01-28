import { ICard } from '../../components/card/card';
import { store } from '../store';

export const showCards = (cards: []) => ({
  type: 'SHOW_CARDS',
  payload: cards,
});

export const fetchCards = () => async (dispatch: typeof store.dispatch) => {
  const response = await fetch('https://api.itbook.store/1.0/new');
  const data = await response.json();
  const books = data.books;

  dispatch(showCards(books));
};
