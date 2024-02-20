import style from './App.module.css';
import AppRoutes from './components/Routes/Routes';
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className={[style.App].join(' ')}>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
