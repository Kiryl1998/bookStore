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
import AppRoutes from './components/Routes/Routes';
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className={[style.App].join(' ')}>
      <Header />
      <div className="container">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
