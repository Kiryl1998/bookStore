import { IBook } from '../components/componentBook/componentBook';

export const localStorageBasket:IBook[] = localStorage.getItem('Basket')
  ? JSON.parse(localStorage.getItem('Basket')!)
  : [];

export const setLocalStorageBasket = (bookContent: IBook) => {
  localStorageBasket.push(bookContent);
  localStorage.setItem('Basket', JSON.stringify(localStorageBasket));
};
