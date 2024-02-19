import BurgerWindow from '../../components/burgerWindow/burgerWindow';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import NewBooks from '../../components/sectionNewBooks/newBooks';
interface PropsMain {
  stateMask: boolean;
  setMask: React.Dispatch<React.SetStateAction<boolean>>;
}

const Main = ({ stateMask, setMask }: PropsMain) => {
  return (
    <>
      <Header stateMask={stateMask} setMask={setMask} />
      <NewBooks />
      <Footer />
    </>
  );
};
export default Main;
