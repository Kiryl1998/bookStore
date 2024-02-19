import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import SectionAccount from '../../components/sectionAccount/sectionAccount';

interface PropsAccount {
  stateMask: boolean;
  setMask: React.Dispatch<React.SetStateAction<boolean>>;
}

const Account = ({ stateMask, setMask }: PropsAccount) => {
  return (
    <>
      <Header stateMask={stateMask} setMask={setMask} />
      <SectionAccount />
      <Footer />
    </>
  );
};
export default Account;
