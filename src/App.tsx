import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Book from './pages/book/book';
import Main from './pages/main/main';
import SingIn from './pages/singIn/singIn';
import SingUp from './pages/singUp/singUp';
import Basket from './pages/basket/basket';
import Favorite from './pages/favorite/favorite';
import Account from './pages/account/account';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="bookStore" element={<Main />} />
          <Route path="book/:id" element={<Book />} />
          <Route path="SingIn" element={<SingIn />} />
          <Route path="SingUp" element={<SingUp />} />
          <Route path="Basket" element={<Basket />} />
          <Route path="Favorite" element={<Favorite />} />
          <Route path="Search" element={<Main />} />
          <Route path="Account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
