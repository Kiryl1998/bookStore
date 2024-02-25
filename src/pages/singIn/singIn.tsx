import styleSingIn from './singIn.module.css';
// import InputForm from '../../components/inputForm/inputForm';
import Button from '../../components/button/button';
import { useNavigate } from 'react-router-dom';
import { styleInputForm } from '../../components/inputForm/inputForm';
import { SubmitHandler, useForm } from 'react-hook-form';
import { gitLocalSingIp } from '../../localStore/localSingIn';
import { useState } from 'react';

export interface singInForm {
  email: string;
  password: string;
}
const SingIN = () => {
  const navigation = useNavigate();
  const [singIn, setSingIn] = useState(false);

  const { register, handleSubmit, reset } = useForm<singInForm>();

  const submit: SubmitHandler<singInForm> = (data) => {
    gitLocalSingIp(data);
    reset();
    if (gitLocalSingIp(data)) {
      navigation('/');
      localStorage.setItem(
        'UserActive',
        JSON.stringify({ ...data, activeUser: true })!
      );
    } else {
      setSingIn(true);
    }
  };

  return (
    <>
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
            {singIn ? (
              <h2 className={styleSingIn.singInTitle}>
                The user does not exist
              </h2>
            ) : null}

            <form onSubmit={handleSubmit(submit)} className={styleSingIn.form}>
              <div className={styleInputForm.wrapInputForm}>
                <label className={styleInputForm.label}>Name</label>
                <input
                  {...register('email', { required: true })}
                  className={styleInputForm.input}
                  placeholder="Your Email"
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

              <Button variable="singIn" btnText={'sign in'} />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingIN;
