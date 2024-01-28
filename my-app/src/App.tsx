import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Book from './pages/book/book';
import Main from './pages/main/main';
import SingIn from './pages/singIn/singIn';
import SingUp from './pages/singUp/singUp';
import Basket from './pages/basket/basket';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="book/:id" element={<Book />} />
          <Route path="SingIn" element={<SingIn />} />
          <Route path="SingUp" element={<SingUp />} />
          <Route path="Basket" element={<Basket />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
