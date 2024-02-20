import CardFavorite from '../../components/cardFavorite/cardFavorite';
import SectionBasket from '../../components/sectionBasket/sectionBasket';
import SimilarBook from '../../components/similarBook/similarBook';

const Favorite = () => {
  return (
    <>
      <SectionBasket
        card={<CardFavorite />}
        swiper={<SimilarBook title={'Popular Books'} />}
      />
    </>
  );
};
export default Favorite;
