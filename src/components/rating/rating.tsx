import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import styleRating from './rating.module.css';
import { useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/store';

interface PropsRating {
  rating: number;
}

const RatingStart = (props:PropsRating) => {
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate);

    // other logic
  };
  // Optinal callback functions
  const onPointerEnter = () => console.log();
  const onPointerLeave = () => console.log();
  const onPointerMove = (value: number, index: number) => console.log();

  return (
    <Rating
      size={25}
      fillColor="black"
      initialValue={props.rating}
      onClick={handleRating}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onPointerMove={onPointerMove}
      /* Available Props */
    />
  );
};
export default RatingStart;
