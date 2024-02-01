import { IBook } from '../components/componentBook/componentBook';

export const arrCardsFavorite = (): IBook[] =>
  localStorage.getItem('Favorite')
    ? JSON.parse(localStorage.getItem('Favorite')!)
    : [];

export const setLocalCardFavorite = (card: IBook) => {
  const existingItem = arrCardsFavorite().find(
    (item: IBook) => item.isbn13 === card.isbn13
  );
  if (!existingItem) {
    localStorage.setItem(
      'Favorite',
      JSON.stringify([...arrCardsFavorite(), card])
    );
  }
};
