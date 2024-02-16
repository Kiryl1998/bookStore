import { IBook } from '../components/componentBook/componentBook';

export const arrCards = (): IBook[] =>
  localStorage.getItem('Basket')
    ? JSON.parse(localStorage.getItem('Basket')!)
    : [];

export const setLocalCard = (card: IBook) => {
  const existingItem = arrCards().find(
    (item: IBook) => item.isbn13 === card.isbn13
  );
  if (!existingItem) {
    localStorage.setItem('Basket', JSON.stringify([...arrCards(), card]));
  }
};
