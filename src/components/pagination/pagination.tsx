import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import stylePagination from './pagination.module.css';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Pagination = () => {
  return (
    <>
      <div className={stylePagination.paginationLeftWrap}>
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>Pref</span>
      </div>
    </>
  );
};
export default Pagination;
