import { IBook } from '../components/componentBook/componentBook';
import { iconBasketIcon } from '../store/actions/countIconBasket';
import { store } from '../store/store';

export const arrCards = (): IBook[] =>
  localStorage.getItem('Basket')
    ? JSON.parse(localStorage.getItem('Basket')!)
    : [];

export const setLocalCard = (
  card: IBook,
  dispatch: typeof store.dispatch,
  addBasketCountIcon: (cards: IBook) => iconBasketIcon,
  book:IBook
) => {
  const existingItem = arrCards().find(
    (item: IBook) => item.isbn13 === card.isbn13
  );
  if (!existingItem) {
    localStorage.setItem(
      'Basket',
      JSON.stringify([...arrCards(), { ...card, count: 1 }])
    );

    dispatch(addBasketCountIcon(book));
  }
};
