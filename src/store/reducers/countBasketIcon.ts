import { IBook } from '../../components/componentBook/componentBook';
import { arrCards } from '../../localStore/localStore';
import {
  COUNT_ICON_BASKET,
  DEL_COUNT_ICON_BASKET,
  countAction,
} from '../actions/countIconBasket';

export const reducerIconCountBasket = (state = [], action: countAction) => {
  switch (action.type) {
    case COUNT_ICON_BASKET:
      return [...state, action.payload];
    case DEL_COUNT_ICON_BASKET:
      return state.filter(
        (item: IBook) => item.isbn13 !== action.payload.isbn13
      );

    default:
      return state ? arrCards() : [];
  }
};
// cards.filter((item) => card.isbn13 !== item.isbn13
