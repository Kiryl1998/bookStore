import { IBook } from '../../components/componentBook/componentBook';

export interface IActionBook {
  type: string;
  payload: IBook;
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
      return { ...state, book: action.payload! };
    default:
      return state;
  }
};
