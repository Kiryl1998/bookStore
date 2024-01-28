import styleSingUp from './singUp.module.css';
import Button from '../../components/button/button';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import InputForm from '../../components/inputForm/inputForm';
import { useNavigate } from 'react-router-dom';

const SingUp = () => {
  const navigation = useNavigate();
  return (
    <>
      <Header />
      <section className={styleSingUp.singUp}>
        <div className={styleSingUp.container}>
          <div className={styleSingUp.wrap}>
            <div className={styleSingUp.wrapTitleForm}>
              <span
                className={[styleSingUp.title, styleSingUp.titSingIn].join(' ')}
                onClick={() => {
                  navigation('/SingIn');
                }}
              >
                sign in
              </span>
              <span
                className={[styleSingUp.title, styleSingUp.titSingUp].join(' ')}
              >
                sign Up
              </span>
            </div>
            <form className={styleSingUp.form}>
              <InputForm
                label={'Name'}
                placeholder={'Your name'}
                type={'text'}
              />
              <InputForm
                label={'Email'}
                placeholder={'Your email'}
                type={'text'}
              />
              <InputForm
                label={'Password'}
                placeholder={'Your password'}
                type={'password'}
              />
              <InputForm
                label={'Confirm password'}
                placeholder={'Confirm password'}
                type={'password'}
              />

              <Button type="singIn" btnText={'sign up'} />
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SingUp;
