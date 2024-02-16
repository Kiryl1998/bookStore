import { IBook } from '../../components/componentBook/componentBook';

export const ADD_BASKET_CARD = 'ADD_BASKET_CARD';
export const INCREMENT_CARD = 'INCREMENT_CARD';
export const DECREMENT_CARD = 'DECREMENT_CARD';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const PAGE_RELOAD = 'PAGE_RELOAD';

export interface count extends IBook {
  count: number;
}

interface addBasketAction {
  type: typeof ADD_BASKET_CARD;
  payload: IBook;
}
interface increment_cardAction {
  type: typeof INCREMENT_CARD;
  payload: count;
}
interface decrement_cardAction {
  type: typeof DECREMENT_CARD;
  payload: count;
}
interface removeFromCartAction {
  type: typeof REMOVE_FROM_CART;
  payload: count;
}

interface pageReloadAction {
  type: typeof PAGE_RELOAD;
  payload: count[];
}

export type cardAction =
  | addBasketAction
  | increment_cardAction
  | decrement_cardAction
  | removeFromCartAction
  | pageReloadAction;

export const addBasket = (card: IBook): addBasketAction => ({
  type: ADD_BASKET_CARD,
  payload: card,
});

export const increment_card = (card: count): increment_cardAction => ({
  type: INCREMENT_CARD,
  payload: card,
});
export const decrement_card = (card: count): decrement_cardAction => ({
  type: DECREMENT_CARD,
  payload: card,
});

export const removeFromCart = (card: count): removeFromCartAction => ({
  type: REMOVE_FROM_CART,
  payload: card,
});

export const pageReload = (cards: count[]): pageReloadAction => ({
  type: PAGE_RELOAD,
  payload: cards,
});
