import { ICard } from '../../components/card/card';
import { SHOW_SEARCH } from '../actions/searchCards';

interface IState {
  cards: [];
}

export interface IAction {
  type: string;
  payload: ICard[];
}
const initialState: IState = {
  cards: [],
};

export const cardsReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case 'SHOW_CARDS':
      return { ...state, cards: action.payload! };

    case SHOW_SEARCH:
      return { ...state, cards: action.payload! };

    default:
      return state;
  }
};
