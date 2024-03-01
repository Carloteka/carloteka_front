import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../Layout';
import {
  Backdrop,
  MenuContainer,
  CloseButton,
  Card,
  Img,
  Price,
  Total,
} from './MenuCart.styled';
import { toggleCartInLocalStorage } from '../../../utils/toggleCartInLocalStorage';
import sprite from '../../../images/sprite.svg';
import { Link } from 'react-router-dom';
import { Good } from '../../../../@types/custom';

interface MenuCartProps {
  onClickHandle: () => void;
  showCartMenu: boolean;
}

export const MenuCart = ({ onClickHandle, showCartMenu }: MenuCartProps) => {
  const { amountInCart, setAmountInCart } = useContext(CartContext);

  const [inCart, setInCart] = useState<Good[]>([]);

  useEffect(() => {
    let goodsInCart: { id: number; amount: number }[] = [];

    if (localStorage.getItem('cart')) {
      goodsInCart = JSON.parse(localStorage.getItem('cart') as string);
    }

    let goods: [] = [];

    if (localStorage.getItem('goods')) {
      goods = JSON.parse(localStorage.getItem('goods') as string);
    }

    const goodsInCartArray = goods.filter(
      (el: { id: number; quantity: number }) =>
        goodsInCart.some((item) => {
          if (el.id === item.id) {
            el.quantity = item.amount;
            return true;
          } else return false;
        }),
    );

    setInCart(goodsInCartArray.filter((el: { id: number }) => el.id !== 0));
  }, [amountInCart]);

  function delFromCart(id: number) {
    const newArray = inCart.filter((el: { id: number }) => el.id !== id);
    toggleCartInLocalStorage(true, id);
    setInCart(newArray);
  }

  function getTotalPrice() {
    return inCart.reduce(
      (total: number, el: { quantity: number; price: number }) =>
        el.price * (el?.quantity ? el.quantity : 1) + total,
      0,
    );
  }

  return (
    <>
      <Backdrop
        onClick={() => onClickHandle()}
        style={{ display: showCartMenu ? 'flex' : 'none' }}
      ></Backdrop>
      {inCart?.length > 0 && (
        <MenuContainer $showCartMenu={showCartMenu}>
          <CloseButton onClick={() => onClickHandle()}>
            <svg width={24} height={24}>
              <use href={`${sprite}#close`} />
            </svg>
          </CloseButton>
          <ul>
            {inCart?.map((el: Good) => (
              <Card key={el.id}>
                <Img
                  src={
                    import.meta.env.PROD
                      ? `http://carloteka.com/${el.image_set[0].image}`
                      : `http://localhost:8000/${el.image_set[0].image}`
                  }
                  width={127}
                  height={158}
                  alt={el.name}
                  loading="lazy"
                />
                <div>
                  <h4>{el.name}</h4>
                  <Price>Ціна: ₴ {el.price}</Price>
                  <p>Кількість: {el.quantity}</p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setAmountInCart((amountInCart: number) => amountInCart - 1);
                    delFromCart(el.id);
                  }}
                >
                  <svg width={9} height={8}>
                    <use href={`${sprite}#del-x`} />
                  </svg>
                </button>
              </Card>
            ))}
          </ul>

          <Total>
            <p>Вартість:</p>
            <p>₴ {getTotalPrice().toFixed(2)}</p>
          </Total>

          <Link
            to={'/cart'}
            onClick={() => onClickHandle()}
            className="primaryBtn"
          >
            переглянути кошик
          </Link>
          <Link
            to={'/delivery'}
            onClick={() => onClickHandle()}
            className="primaryBtn"
          >
            Купити
          </Link>
        </MenuContainer>
      )}
    </>
  );
};
