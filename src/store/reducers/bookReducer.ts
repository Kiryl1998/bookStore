import { IBook } from '../../components/componentBook/componentBook';

export interface IActionBook {
  type: string;
  payload: IBook | IBook[];
}

interface IState {
  book: {};
}

const initialState: IState = {
  book: {},
};

export const bookReducer = (state = initialState, action: IActionBook) => {
  switch (action.type) {
    case 'SHOW_BOOK':
      return { ...state, book: { ...action.payload, favorite: false } };
    case 'SET_LIKE':
      return { ...state, book: { ...action.payload, favorite: true } };
    case 'GET_LIKE':
      return { ...state, book: { ...action.payload, favorite: false } };
    default:
      return state;
  }
};
