import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchCards } from '../../store/actions/NewBooksAction';
import { RootState } from '../../store/store';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './swiperSimilar.css';

// import required modules
import { Navigation } from 'swiper/modules';
import Card, { ICard } from '../card/card';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchBook } from '../../store/actions/BookAction';

const SwiperSimilar = () => {
  const navigation = useNavigate();
  const { id } = useParams();
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

  useEffect(() => {
    dispatch(fetchBook(id));
  }, [onClick]);
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={{ nextEl: '.button-next', prevEl: '.button-prev' }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {cards.sort().map((item: ICard) => (
          <SwiperSlide key={item.isbn13} onClick={() => onClick(item.isbn13)}>
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
};
export default SwiperSimilar;
