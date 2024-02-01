import CardFavorite from '../../components/cardFavorite/cardFavorite';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import SectionBasket from '../../components/sectionBasket/sectionBasket';

const Favorite = () => {
  return (
    <>
      <Header />
      <SectionBasket card={<CardFavorite />} />
      <Footer />
    </>
  );
};
export default Favorite;
