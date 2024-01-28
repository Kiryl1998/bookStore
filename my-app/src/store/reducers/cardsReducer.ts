import { ICard } from "../../components/card/card";


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
    default:
      return state;
  }
};
