import { Route, Routes } from 'react-router-dom';
import Main from '../../pages/main/main';
import Book from '../../pages/book/book';
import SingIn from '../../pages/singIn/singIn';
import SingUp from '../../pages/singUp/singUp';
import Basket from '../../pages/basket/basket';
import Favorite from '../../pages/favorite/favorite';
import Account from '../../pages/account/account';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/book/:id" element={<Book />} />
      <Route path="/SingIn" element={<SingIn />} />
      <Route path="/SingUp" element={<SingUp />} />
      <Route path="/Basket" element={<Basket />} />
      <Route path="/Favorite" element={<Favorite />} />
      <Route path="/Search" element={<Main />} />
      <Route path="/Account" element={<Account />} />
    </Routes>
  );
};

export default AppRoutes;
