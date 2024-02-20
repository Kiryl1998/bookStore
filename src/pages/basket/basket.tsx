import CardBasketLike from '../../components/cardBasketLike/cardBasketLike';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import SectionBasket from '../../components/sectionBasket/sectionBasket';



const Basket = () => {
  return (
    <>
      <SectionBasket card={<CardBasketLike />} />
    </>
  );
};

export default Basket;
