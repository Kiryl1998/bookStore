import styleSingUp from './singUp.module.css';
import Button from '../../components/button/button';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { styleInputForm } from '../../components/inputForm/inputForm';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { setLocalSingUp } from '../../localStore/localSingUp';

export interface myForm {
  name: string;
  email: string;
  password: string;
  'Confirm password': string;
}

const SingUp = () => {
  const navigation = useNavigate();

  const { register, handleSubmit, reset } = useForm<myForm>();

  const submit: SubmitHandler<myForm> = (data) => {
    setLocalSingUp(data);
    reset();
  };

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
            <form onSubmit={handleSubmit(submit)} className={styleSingUp.form}>
              <div className={styleInputForm.wrapInputForm}>
                <label className={styleInputForm.label}>Name</label>
                <input
                  {...register('name', { required: true })}
                  className={styleInputForm.input}
                  placeholder="Your name"
                  type="text"
                />
              </div>

              <div className={styleInputForm.wrapInputForm}>
                <label className={styleInputForm.label}>Email</label>
                <input
                  {...register('email', { required: true })}
                  className={styleInputForm.input}
                  placeholder="Your email"
                  type="text"
                />
              </div>

              <div className={styleInputForm.wrapInputForm}>
                <label className={styleInputForm.label}>Password</label>
                <input
                  {...register('password', { required: true })}
                  className={styleInputForm.input}
                  placeholder="Your password"
                  type="password"
                  minLength={5}
                />
              </div>

              <div className={styleInputForm.wrapInputForm}>
                <label className={styleInputForm.label}>Confirm password</label>
                <input
                  {...register('Confirm password', { required: true })}
                  className={styleInputForm.input}
                  placeholder="Confirm password"
                  type="password"
                />
              </div>

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
