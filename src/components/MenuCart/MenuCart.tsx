import css from './MenuCart.module.scss';
import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../Layout';
import sprite from '../../images/sprite.svg';
import { Link } from 'react-router-dom';
import { Good } from '../../../@types/custom';
import {
  toggleLocalStorage,
  checkLocalStorage,
  getTotalPrice,
} from '../../utils';

interface MenuCartProps {
  onClickHandle: () => void;
  showCartMenu: boolean;
}

export const MenuCart = ({ onClickHandle, showCartMenu }: MenuCartProps) => {
  const { amountInCart, setAmountInCart } = useContext(CartContext);

  const [inCart, setInCart] = useState<Good[]>([]);

  useEffect(() => {
    const goodsInCart: Good[] = checkLocalStorage('cart', []);

    setInCart(goodsInCart);
  }, [amountInCart]);

  function delFromCart(id: number) {
    const newArray = inCart.filter((el: { id: number }) => el.id !== id);
    toggleLocalStorage(true, 'cart', { id });
    setInCart(newArray);
  }

  return (
    <>
      <div
        className="backdrop overlay"
        onClick={() => onClickHandle()}
        style={{ display: showCartMenu ? 'flex' : 'none', zIndex: 28 }}
      ></div>

      <div className={`${css.menuWrapper} ${showCartMenu ? css.show : ''}`}>
        <button
          onClick={() => onClickHandle()}
          title="Закрити меню"
          className={css.closeBtn}
        >
          <svg width={24} height={24}>
            <use href={`${sprite}#close`} />
          </svg>
        </button>
        {inCart?.length > 0 ? (
          <>
            <ul>
              {inCart?.map((el: Good) => (
                <li className={css.card} key={el.id}>
                  <img
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
                    <p className="price">Ціна: ₴ {el.price}</p>
                    <p>Кількість: {el?.quantity ? el.quantity : 1}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setAmountInCart(
                        (amountInCart: number) => amountInCart - 1,
                      );
                      delFromCart(el.id);
                    }}
                    title="Видалити товар з кошика"
                  >
                    <svg width={9} height={8}>
                      <use href={`${sprite}#del-x`} />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>

            <div className={css.total}>
              <p>Вартість:</p>
              <p>₴ {getTotalPrice(inCart)}</p>
            </div>

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
          </>
        ) : (
          <p>нічого нема</p>
        )}
      </div>
    </>
  );
};
