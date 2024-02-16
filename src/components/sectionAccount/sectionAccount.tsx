import { useNavigate } from 'react-router-dom';
import Icon from '../icon/icon';
import styleAccountUser from './sectionAccount.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { styleInputForm } from '../inputForm/inputForm';
import { UserActive } from '../header/header';
import { myForm } from '../../pages/singUp/singUp';
import Button from '../button/button';

const SectionAccount = () => {
  const navigation = useNavigate();
  const dataRegisUser: myForm[] = JSON.parse(localStorage.getItem('User')!);
  const dataActiveUser: UserActive = JSON.parse(
    localStorage.getItem('UserActive')!
  );
  const UserData = dataRegisUser.find(
    (item) => item.email === dataActiveUser.email
  );
  const isUserData = (dataActiveUser: UserActive) => {
    const UserData = dataRegisUser.find(
      (item) => item.email === dataActiveUser.email
    );
    return UserData;
  };
  return (
    <section className={styleAccountUser.Account}>
      <div className={styleAccountUser.container}>
        <div className={styleAccountUser.wrap}>
          <Icon
            onClick={() => {
              navigation('/bookStore');
            }}
            icon={
              <FontAwesomeIcon
                icon={faArrowLeftLong}
                className={styleAccountUser.iconArrow}
              />
            }
          />
          <h2 className={styleAccountUser.title}>Account</h2>
        </div>
        <h2 className={styleAccountUser.profileTitle}>Profile</h2>
        <form className={styleAccountUser.formUser}>
          <div className={styleAccountUser.wrapNameEmail}>
            <div className={styleInputForm.wrapInputForm}>
              <label className={styleInputForm.label}>Name</label>
              <input
                value={UserData?.name}
                className={styleAccountUser.input}
                type="text"
              />
            </div>

            <div className={styleInputForm.wrapInputForm}>
              <label className={styleInputForm.label}>Email</label>
              <input
                value={UserData?.email}
                className={styleAccountUser.input}
                type="text"
              />
            </div>
          </div>

          <h2 className={styleAccountUser.profileTitle}>Password</h2>

          <div className={styleAccountUser.wrapPassword}>
            <div className={styleInputForm.wrapInputForm}>
              <label className={styleInputForm.label}>Password</label>
              <input
                value={UserData?.password}
                className={styleAccountUser.input}
                type="password"
              />
            </div>
            <div className={styleAccountUser.wrapNewPassword}>
              <div className={styleInputForm.wrapInputForm}>
                <label className={styleInputForm.label}>New password</label>
                <input
                  className={styleAccountUser.input}
                  type="text"
                />
              </div>
              <div className={styleInputForm.wrapInputForm}>
                <label className={styleInputForm.label}>Confirm password</label>
                <input
                  className={styleAccountUser.input}
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className={styleAccountUser.buttonFormUser}>
            <Button type='Save changes' btnText={'Save changes'}></Button>
            <Button type='Cancel' btnText={'Cancel'}></Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SectionAccount;
