import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
import style from './App.module.css';
import Book from './pages/book/book';
import Main from './pages/main/main';
import SingIn from './pages/singIn/singIn';
import SingUp from './pages/singUp/singUp';
import Basket from './pages/basket/basket';
import Favorite from './pages/favorite/favorite';
import Account from './pages/account/account';
import { useState } from 'react';

function App() {
  const [mask, setMask] = useState(false);
  return (
    <div className={[style.App, mask ? style.active : null].join(' ')}>
      <BrowserRouter>
        <Routes>
          <Route
            path="bookStore"
            element={<Main stateMask={mask} setMask={setMask} />}
          />
          <Route
            path="book/:id"
            element={<Book stateMask={mask} setMask={setMask} />}
          />
          <Route
            path="SingIn"
            element={<SingIn stateMask={mask} setMask={setMask} />}
          />
          <Route
            path="SingUp"
            element={<SingUp stateMask={mask} setMask={setMask} />}
          />
          <Route
            path="Basket"
            element={<Basket stateMask={mask} setMask={setMask} />}
          />
          <Route
            path="Favorite"
            element={<Favorite stateMask={mask} setMask={setMask} />}
          />
          <Route
            path="Search"
            element={<Main stateMask={mask} setMask={setMask} />}
          />
          <Route
            path="Account"
            element={<Account stateMask={mask} setMask={setMask} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
