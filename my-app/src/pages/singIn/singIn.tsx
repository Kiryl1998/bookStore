import styleSingIn from './singIn.module.css';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import InputForm from '../../components/inputForm/inputForm';
import Button from '../../components/button/button';
import { useNavigate } from 'react-router-dom';

const SingIN = () => {
  const navigation = useNavigate();
  return (
    <>
      <Header />
      <section className={styleSingIn.singIn}>
        <div className={styleSingIn.container}>
          <div className={styleSingIn.wrap}>
            <div className={styleSingIn.wrapTitleForm}>
              <span
                className={[styleSingIn.title, styleSingIn.titSingIn].join(' ')}
              >
                sign in
              </span>
              <span
                className={[styleSingIn.title, styleSingIn.titSingUp].join(' ')}
                onClick={() => {
                  navigation('/SingUp');
                }}
              >
                sign Up
              </span>
            </div>
            <form className={styleSingIn.form}>
              <InputForm label={'Email'} placeholder={'Your email'} type={'text'} />
              <InputForm
                label={'Password'}
                placeholder={'Your password'}
                subInput={'Forgot password ?'} type={'text'}              />
              <Button type="singIn" btnText={'sign in'} />
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SingIN;
