import { singInForm } from '../pages/singIn/singIn';
import { myForm } from '../pages/singUp/singUp';
import { arrSingUp } from './localSingUp';

export const gitLocalSingIp = (user: singInForm) => {
  const existingUser = arrSingUp().find(
    (item: myForm) => item.email === user.email
  );
  if (existingUser) {
    return true;
  }
};
