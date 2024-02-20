import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SwiperSimilar from '../swiperSimilar/swiperSimilar';
import styleSimilarBook from './similarBook.module.css';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface propsSimilarBook {
  title: string;
}
const SimilarBook = (props: propsSimilarBook) => {
  return (
    <>
      <div className={styleSimilarBook.wrapTitleNav}>
        <h2 className={styleSimilarBook.title}>{props.title}</h2>
        <div className={styleSimilarBook.wrapNavigation}>
          <div
            className={['button-prev', styleSimilarBook.buttonPrev].join(' ')}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <div
            className={['button-next', styleSimilarBook.buttonNext].join(' ')}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
      <div className={styleSimilarBook.wrapSlider}>
        <SwiperSimilar />
      </div>
    </>
  );
};

export default SimilarBook;
