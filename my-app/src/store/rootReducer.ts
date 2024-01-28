import { combineReducers } from '@reduxjs/toolkit';
import { cardsReducer } from './reducers/cardsReducer';
import { bookReducer } from './reducers/bookReducer';

export const rootReducer = combineReducers({
  cardsReducer: cardsReducer,
  bookReducer: bookReducer,
});
