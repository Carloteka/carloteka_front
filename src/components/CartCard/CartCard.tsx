import css from './CartCard.module.scss';
import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../Layout';
import { Increment } from '../Increment/Increment';
import sprite from '../../images/sprite.svg';
import { checkLocalStorage } from '../../utils';
import { Good } from '../../../@types/custom';

interface CartCardProps {
  good: Good;
  onClickDelete: (id: number) => void;
  increment: (quantity: number, good: Good) => void;
}

export const CartCard = ({ good, onClickDelete, increment }: CartCardProps) => {
  const { image_set, name, price, id } = good;

  const { setAmountInCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const newArray = checkLocalStorage('cart', []);

    const temp = newArray.find((el: { id: number }) => el.id === id);

    setQuantity(temp?.quantity ? temp.quantity : 1);
  }, [quantity]);

  return (
    <>
      <img
        src={
          import.meta.env.PROD
            ? `http://carloteka.com/${image_set[0].image}`
            : `http://localhost:8000/${image_set[0].image}`
        }
        width={60}
        height={82}
        alt={name}
        loading="lazy"
        className={css.img}
      />
      <h4 className={css.name}>Декоративна ваза з натурального дерева</h4>

      <span className={css.priceTitle}>Ціна</span>
      <p className={css.price}>₴ {price}</p>

      <span className={css.amountTitle}>Кількість</span>
      <Increment
        increment={increment}
        good={good}
        quantity={quantity}
        setQuantity={setQuantity}
      />

      <span className={css.totaltitle}>Загальна вартість</span>
      <p className={css.totalPrice}>₴ {quantity * price}</p>

      <button
        className={css.delBtn}
        type="button"
        onClick={() => {
          setAmountInCart((amountInCart: number) => amountInCart - 1);
          onClickDelete(id);
        }}
      >
        <svg width={16} height={16}>
          <use href={`${sprite}#close`} />
        </svg>
      </button>
    </>
  );
};
