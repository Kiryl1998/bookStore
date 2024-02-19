import CardBasketLike from '../../components/cardBasketLike/cardBasketLike';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import SectionBasket from '../../components/sectionBasket/sectionBasket';

interface PropsBasket {
  stateMask: boolean;
  setMask: React.Dispatch<React.SetStateAction<boolean>>;
}

const Basket = ({ stateMask, setMask }: PropsBasket) => {
  return (
    <>
      <Header stateMask={stateMask} setMask={setMask} />
      <SectionBasket card={<CardBasketLike />} />
      <Footer />
    </>
  );
};

export default Basket;
