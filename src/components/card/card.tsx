import styleCard from './card.module.css';
import RatingStart from '../rating/rating';

export interface ICard {
  image: string;
  title: string;
  subtitle: string;
  price: string;
  rating: number;
  isbn13: string;
}

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const Card = (props: ICard) => {
  return (
    <>
      <div key={props.isbn13} className={styleCard.wrapCard}>
        <div className={styleCard.wrapImgCard}>
          <img className={styleCard.img} src={props.image} alt={props.title} />
        </div>
        <h3 className={styleCard.title}>{props.title}</h3>
        <div className={styleCard.subTitle}>
          <p>{`${props.subtitle.slice(0, 45)}...`}</p>
        </div>
        <div className={styleCard.wrapPriceRating}>
          <div className={styleCard.price}>{props.price}</div>
          <div className={styleCard.rating}>
            <RatingStart rating={getRandomIntInclusive(3,5)} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
