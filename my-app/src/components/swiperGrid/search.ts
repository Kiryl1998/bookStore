import { NavigateFunction } from 'react-router-dom';
import { store } from '../../store/store';
import { fetchSearchCards } from '../../store/actions/searchCards';
import { fetchCards } from '../../store/actions/NewBooksAction';

export const handleInputSearch = (
  event: React.ChangeEvent<HTMLInputElement>,
  navigation: NavigateFunction,
  dispatch: typeof store.dispatch
) => {
  navigation('/Search');
  const text = event.target.value;
  if (text.length > 0) {
    dispatch(fetchSearchCards(text));
  } else {
    dispatch(fetchCards());
  }
};
