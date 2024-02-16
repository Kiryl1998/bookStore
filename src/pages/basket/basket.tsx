import CardBasketLike from '../../components/cardBasketLike/cardBasketLike';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import SectionBasket from '../../components/sectionBasket/sectionBasket';

const Basket = () => {
  return (
    <>
      <Header />
      <SectionBasket card={<CardBasketLike />} />
      <Footer />
    </>
  );
};

export default Basket;
