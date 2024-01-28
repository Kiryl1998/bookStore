import SwiperGrid from '../swiperGrid/swiperGrid';
import Card from '../card/card';
import Pagination from '../pagination/pagination';
import styleNewBooks from './newBoooks.module.css';
import SubscribetoNewsletter from '../subscribetoNewsletter/subscribetoNewsletter';
const NewBooks = () => {
  return (
    <section className={styleNewBooks.newBoooks}>
      <div className={styleNewBooks.container}>
        <div className={styleNewBooks.wrap}>
          <h1 className={styleNewBooks.title}>new releases books</h1>
          <div className={styleNewBooks.wrapCards}>
            <SwiperGrid />
          </div>
          <SubscribetoNewsletter />
        </div>
      </div>
    </section>
  );
};
export default NewBooks;
