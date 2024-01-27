import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../Layout';
import { Increment } from '../Increment/Increment';
import { Img, Name, Div, Price, TotalPrice, DelBtn } from './CartCard.styled';
import sprite from '../../images/sprite.svg';
import { Good } from '../../../@types/custom';
// type Good = {
//   images: [{ image: string }];
//   name: string;
//   price: number;
//   id_name: string;
//   quantity: number;
// };

interface CartCardProps {
  good: Good;
  onClickDelete: (id: number) => void;
  increment: (quantity: number, id: number) => void;
}

export const CartCard = ({ good, onClickDelete, increment }: CartCardProps) => {
  const { image_set, name, price, id } = good;

  const { setAmountInCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([]));
    }

    const newArray = JSON.parse(localStorage.getItem('cart') as string);

    const temp = newArray.find((el: { id: number }) => el.id === good.id);

    setQuantity(temp.amount);
  }, [quantity]);

  return (
    <>
      <Img
        src={
          import.meta.env.PROD
            ? `http://carloteka.com/${image_set[0].image}`
            : `http://localhost:8000/${image_set[0].image}`
        }
        width={60}
        height={82}
        alt={name}
        loading="lazy"
      />
      <Name>Декоративна ваза з натурального дерева</Name>
      <Div>
        <p>Ціна</p>
        <Price>₴ {price}</Price>
      </Div>
      <Div>
        <p>Кількість</p>
        <Increment
          increment={increment}
          id={id}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </Div>
      <Div>
        <p>Загальна вартість</p>
        <TotalPrice>₴ {quantity * price}</TotalPrice>
      </Div>

      <DelBtn
        type="button"
        onClick={() => {
          setAmountInCart((amountInCart: number) => amountInCart - 1);
          onClickDelete(id);
        }}
      >
        <svg width={16} height={16}>
          <use href={`${sprite}#close`} />
        </svg>
      </DelBtn>
    </>
  );
};
