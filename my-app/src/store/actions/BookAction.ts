import { store } from '../store';

export const showBook = (book: {}) => ({
  type: 'SHOW_BOOK',
  payload: book,
});

export const fetchBook =
  (id: string | undefined) => async (dispatch: typeof store.dispatch) => {
    const response = await fetch(`https://api.itbook.store/1.0/books/${id}`);
    const data = await response.json();
    const book = data;

    dispatch(showBook(book));
  };
