import { useEffect, useState } from 'react';
import Button from '../button/button';
import styleTotal from './totalBasket.module.css';
import CardBasketLike from '../cardBasketLike/cardBasketLike';
import { IBook } from '../componentBook/componentBook';

interface propsTotal {
  stateCards: IBook[];
}

const Total = ({ stateCards }: propsTotal) => {
  const sumTotal = stateCards
    .map((item: { price: string }) => item.price)
    .reduce((sum, item) => sum + Number(item.replace('$', '')), 0);

  const vat = ((sumTotal / 100) * 3).toFixed(2);
  const total = (sumTotal + Number(vat)).toFixed(2);

  return (
    <form className={styleTotal.wrap}>
      <div className={styleTotal.wrapContent}>
        <div className={styleTotal.wrapText}>
          <span className={styleTotal.textLeft}>Sum total</span>
          <span className={styleTotal.textRight}>{`$ ${sumTotal}`}</span>
        </div>
        <div className={styleTotal.wrapText}>
          <span className={styleTotal.textLeft}>VAT</span>
          <span className={styleTotal.textRight}>{`$ ${vat}`}</span>
        </div>
        <div className={styleTotal.wrapText}>
          <span className={styleTotal.textTotal}>Total:</span>
          <span className={styleTotal.textTotal}>{`$ ${total}`}</span>
        </div>
        <Button type="button" variable={'total'} btnText={'check out'} />
      </div>
    </form>
  );
};
export default Total;
