import { IBook } from '../../components/componentBook/componentBook';
import {
  ADD_BASKET_CARD,
  DECREMENT_CARD,
  INCREMENT_CARD,
  PAGE_RELOAD,
  REMOVE_FROM_CART,
  cardAction,
  count,
} from '../actions/addBasket';

export const reducerAddBasket = (state: count[] = [], action: cardAction) => {
  switch (action.type) {
    case ADD_BASKET_CARD:
      const existingItem = state.find(
        (item: IBook) => item.isbn13 === action.payload.isbn13
      );
      if (existingItem) {
        return state.map((item) =>
          item.isbn13 === action.payload.isbn13
            ? { ...item, count: item.count + 1 }
            : item
        );
      } else {
        return [...state, { ...action.payload, count: 1 }];
      }
    case REMOVE_FROM_CART:
      return state.filter((item) => item.isbn13 !== action.payload.isbn13);
    case PAGE_RELOAD:
      return [...state, { ...action.payload }];
    case INCREMENT_CARD:
      return state.map((item) =>
        item.isbn13 === action.payload.isbn13
          ? {
              ...item,
              count: item.count + 1,
              price: `$${(
                Number(item.price.replace('$', '')) * item.count
              ).toFixed(2)}`,
            }
          : item
      );
    case DECREMENT_CARD:
      return state.map((item) =>
        item.isbn13 === action.payload.isbn13
          ? { ...item, count: Math.max(item.count - 1, 1) }
          : item
      );
    default:
      return state;
  }
};
