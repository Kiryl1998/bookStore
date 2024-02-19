import CardFavorite from '../../components/cardFavorite/cardFavorite';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import SectionBasket from '../../components/sectionBasket/sectionBasket';

interface PropsBasket {
  stateMask: boolean;
  setMask: React.Dispatch<React.SetStateAction<boolean>>;
}

const Favorite = ({ stateMask,setMask }: PropsBasket) => {
  return (
    <>
      <Header stateMask={stateMask} setMask={setMask} />
      <SectionBasket card={<CardFavorite />} />
      <Footer />
    </>
  );
};
export default Favorite;