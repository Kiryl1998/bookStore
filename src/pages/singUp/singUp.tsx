import styleSingUp from './singUp.module.css';
import Button from '../../components/button/button';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { styleInputForm } from '../../components/inputForm/inputForm';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { setLocalSingUp } from '../../localStore/localSingUp';
import { useState } from 'react';

export interface myForm {
  name: string;
  email: string;
  password: string;
  'Confirm password': string;
}

const SingUp = () => {
  const navigation = useNavigate();
  const [singUp, setSingUp] = useState(false);
  const [notSingUp, setNotSingUp] = useState(false);

  const { register, handleSubmit, reset } = useForm<myForm>();

  const submit: SubmitHandler<myForm> = (data) => {
    if (localStorage.getItem('User')) {
      const local: myForm[] = JSON.parse(localStorage.getItem('User')!);
      const existingUser = local.find((item) => item.email === data.email);
      if (existingUser) {
        setSingUp(false);
        setNotSingUp(true);
      } else {
        setSingUp(true);
        setNotSingUp(false);
        setLocalSingUp(data);
      }
    } else {
      setLocalSingUp(data);
      setSingUp(!singUp);
    }

    reset();
  };

  return (
    <>
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
            {singUp ? (
              <h2 className={styleSingUp.titleRegistOk}>
                Successful registration
              </h2>
            ) : null}
            {notSingUp ? (
              <h2 className={styleSingUp.titleRegist}>
                The user with the same Email is already registered
              </h2>
            ) : null}
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

              <Button variable="singIn" btnText={'sign up'} />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingUp;
