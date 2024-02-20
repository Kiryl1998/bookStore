import { IBook } from '../../components/componentBook/componentBook';

export const COUNT_ICON_BASKET = 'COUNT_ICON_BASKET';
export const DEL_COUNT_ICON_BASKET = 'DEL_COUNT_ICON_BASKET';

export interface iconBasketIcon {
  type: typeof COUNT_ICON_BASKET;
  payload: IBook;
}

export interface delIconBasketIcon {
  type: typeof DEL_COUNT_ICON_BASKET;
  payload: IBook;
}
export type countAction = iconBasketIcon | delIconBasketIcon;

export const addBasketCountIcon = (card: IBook): iconBasketIcon => ({
  type: COUNT_ICON_BASKET,
  payload: card,
});
export const delBasketCountIcon = (card: IBook): delIconBasketIcon => ({
  type: DEL_COUNT_ICON_BASKET,
  payload: card,
});
