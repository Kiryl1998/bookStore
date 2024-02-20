import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import Icon from '../icon/icon';
import styleSectionBook from './sectionBook.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SubscribetoNewsletter from '../subscribetoNewsletter/subscribetoNewsletter';
import ComponentBook from '../componentBook/componentBook';
import SimilarBook from '../similarBook/similarBook';
import { useNavigate } from 'react-router-dom';
import { SetStateAction, useState } from 'react';
const SectionBook = () => {
  const navigation = useNavigate();

  return (
    <section className={styleSectionBook.book}>
      <div className={styleSectionBook.container}>
        <div className={styleSectionBook.wrap}>
          <Icon
            onClick={() => {
              navigation('/bookStore');
            }}
            icon={
              <FontAwesomeIcon
                icon={faArrowLeftLong}
                className={styleSectionBook.iconArrow}
              />
            }
          />
          <ComponentBook />
          <SubscribetoNewsletter />
          <SimilarBook title={'Similar Books'} />
        </div>
      </div>
    </section>
  );
};
export default SectionBook;
