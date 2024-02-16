import { IBook } from '../components/componentBook/componentBook';

export const arrCardsFavorite = (): IBook[] =>
  localStorage.getItem('Favorite')
    ? JSON.parse(localStorage.getItem('Favorite')!)
    : [];

export const setLike = (card: IBook) => {
  if (arrCardsFavorite().length > 0) {
    const cardLike = arrCardsFavorite().find(
      (item) => item.isbn13 === card.isbn13
    ) as IBook;
    if ('favorite' in cardLike) {
      return cardLike.favorite;
    } else {
      return false;
    }
  }
};

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
