import { useEffect, useState } from 'react';
import { localStorageBasket } from '../../localStorage/Basket';
import Button from '../button/button';
import styleTotal from './totalBasket.module.css';
import { IBook } from '../componentBook/componentBook';
import CardBasketLike from '../cardBasketLike/cardBasketLike';

const Total = () => {
  const [cards, setCard] = useState(localStorageBasket);
  const [sumTotal, setSumTotal] = useState(0);
  useEffect(() => {
    setSumTotal(
      cards.reduce(
        (sum: number, item: IBook) =>
          sum + parseInt(item.price.replace('$', '')),
        0
      )
    );
  }, [<CardBasketLike />]);

  return (
    <form className={styleTotal.wrap}>
      <div className={styleTotal.wrapContent}>
        <div className={styleTotal.wrapText}>
          <span className={styleTotal.textLeft}>Sum total</span>
          <span className={styleTotal.textRight}>{`$ ${sumTotal}`}</span>
        </div>
        <div className={styleTotal.wrapText}>
          <span className={styleTotal.textLeft}>VAT</span>
          <span className={styleTotal.textRight}>$12</span>
        </div>
        <div className={styleTotal.wrapText}>
          <span className={styleTotal.textTotal}>Total</span>
          <span className={styleTotal.textTotal}>$12</span>
        </div>
        <Button type={'total'} btnText={'check out'} />
      </div>
    </form>
  );
};
export default Total;
