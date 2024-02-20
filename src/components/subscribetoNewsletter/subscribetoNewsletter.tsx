import styleSubscribetoNewsletter from './subscribetoNewsletter.module.css';
import styleInput from '../input/input.module.css';
import Button from '../button/button';

const SubscribetoNewsletter = () => {
  return (
    <div className={styleSubscribetoNewsletter.wrap}>
      <div>
        <h2 className={styleSubscribetoNewsletter.title}>
          Subscribe to Newsletter
        </h2>
        <div className={styleSubscribetoNewsletter.subTitle}>
          <p>
            Be the first to know about new IT books, upcoming releases,
            exclusive offers and more.
          </p>
        </div>
      </div>
      <form className={styleSubscribetoNewsletter.wrapForm}>
        <input
          className={styleInput.input}
          type="text"
          placeholder="Your email"
        />
        <Button variable='Subscribe' btnText={'Subscribe'} />
      </form>
    </div>
  );
};
export default SubscribetoNewsletter;
