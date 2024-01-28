import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import styleCard from '../card/card.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swiperGrid.css';

// import required modules
import { Grid, Pagination, Navigation } from 'swiper/modules';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchCards } from '../../store/actions/NewBooksAction';
import { RootState } from '../../store/store';
import SwiperCore from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Card, { ICard } from '../card/card';
import { useNavigate } from 'react-router-dom';
SwiperCore.use([Navigation]);

export default function SwiperGrid() {
  const navigation = useNavigate();
  const cards = useAppSelector(
    (RootReducer: RootState) => RootReducer.cardsReducer.cards
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCards());
  }, []);

  const onClick = (isbn13: string) => {
    navigation('/book/' + isbn13);
  };

  return (
    <>
      <div className={['button-prev', 'buttonPrev'].join(' ')}>
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>Prev</span>
      </div>
      <div className={['button-next', 'buttonNext'].join(' ')}>
        <span>Next</span>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={20}
        simulateTouch={false}
        slidesPerGroup={3}
        navigation={{ nextEl: '.button-next', prevEl: '.button-prev' }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          renderBullet: function (index: number, className: string) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        }}
        modules={[Grid, Pagination, Navigation]}
        className="mySwiper"
      >
        {cards.map((item: ICard) => (
          <SwiperSlide onClick={() => onClick(item.isbn13)} key={item.isbn13}>
            <Card
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
              price={item.price}
              rating={item.rating}
              isbn13={item.isbn13}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}