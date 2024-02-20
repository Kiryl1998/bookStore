import { combineReducers } from '@reduxjs/toolkit';
import { cardsReducer } from './reducers/cardsReducer';
import { bookReducer } from './reducers/bookReducer';
import { reducerAddBasket } from './reducers/reducerAddBasket';
import { reducerIconCountBasket } from './reducers/countBasketIcon';

export const rootReducer = combineReducers({
  cardsReducer: cardsReducer,
  bookReducer: bookReducer,
  reducerAddBasket: reducerAddBasket,
  reducerIconCountBasket: reducerIconCountBasket,
});
