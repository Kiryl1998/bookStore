import { myForm } from '../pages/singUp/singUp';

export const arrSingUp = (): myForm[] =>
  localStorage.getItem('User') ? JSON.parse(localStorage.getItem('User')!) : [];

export const setLocalSingUp = (user: myForm) => {
  const existingUser = arrSingUp().find(
    (item: myForm) => item.email === user.email
  );
  if (!existingUser) {
    localStorage.setItem('User', JSON.stringify([...arrSingUp(), user]));
  }
};
