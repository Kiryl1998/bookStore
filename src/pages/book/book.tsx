import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import SectionBook from '../../components/sectionBook/sectionBook';

interface PropsBook {
  stateMask: boolean;
  setMask: React.Dispatch<React.SetStateAction<boolean>>;
}

const Book = ({ stateMask, setMask }: PropsBook) => {
  return (
    <>
      <Header stateMask={stateMask} setMask={setMask} />
      <SectionBook />
      <Footer />
    </>
  );
};
export default Book;
