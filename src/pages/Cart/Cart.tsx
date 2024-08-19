import css from './Cart.module.scss';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../components/Layout';
import { ContainerLimiter } from '../../components/containerLimiter/ContainerLimiter';
import { CartCard } from '../../components/CartCard/CartCard';
import {
  addToCart,
  toggleLocalStorage,
  checkLocalStorage,
  getTotalPrice,
} from '../../utils';
import sprite from '../../images/sprite.svg';
import { Good } from '../../../@types/custom';

const Cart = () => {
  const { setAmountInCart } = useContext(CartContext);

  const goodsInCart: Good[] = checkLocalStorage('cart', []);

  const [inCart, setInCart] = useState<Good[]>(goodsInCart);
  console.log(inCart);

  function clearCart() {
    localStorage.cart = [];
    setInCart([]);
    setAmountInCart(0);
  }

  function delFromCart(id: number) {
    const newArray = goodsInCart.filter((el: { id: number }) => el.id !== id);
    toggleLocalStorage(true, id);
    setInCart(newArray);
  }

  function increment(amount: number, good: Good) {
    const newArray: Good[] = [...inCart];
    newArray[
      inCart.findIndex((el: { id: number }) => el.id === good.id)
    ].quantity = amount;

    addToCart(amount, good, 'replace');
    setInCart(newArray);
  }

  return (
    <>
      <ContainerLimiter>
        <div className={`grid ${css.listHeaderWrapper}`}>
          <p className={css.name}>Товар</p>
          <p className={css.price}>Ціна</p>
          <p className={css.quantity}>Кількість</p>
          <p className={css.total}>Загальна вартість</p>
        </div>
        <div className="favorites-cart_list">
          {inCart.map((el: Good) => (
            <li className={`grid ${css.card}`} key={el.id}>
              <CartCard
                good={el}
                onClickDelete={delFromCart}
                increment={increment}
              />
            </li>
          ))}
        </div>
        {inCart.length > 0 ? (
          <div className={css.flexBox}>
            <Link to={'/catalog'} className={`${css.toCatalog} secondaryBtn`}>
              <svg width={16} height={16}>
                <use href={`${sprite}#arrow-right`} />
              </svg>
              продовжити покупки
            </Link>
            <button
              type="button"
              onClick={() => clearCart()}
              className={`${css.cartsBtn} secondaryBtn`}
            >
              Очистити кошик
            </button>
          </div>
        ) : (
          <div className="emptyMessage">
            <svg width={124} height={124}>
              <use href={`${sprite}#cart`} />
            </svg>
            <h2>Ваш кошик порожній</h2>
            <Link to={'/catalog'} className={`${css.clearBtn} primaryBtn`}>
              <svg width={14} height={9}>
                <use href={`${sprite}#arrow-right`} />
              </svg>
              повернутись до покупок
            </Link>
          </div>
        )}
        {inCart.length > 0 && (
          <div className={css.flexContainer}>
            <form className={css.couponForm}>
              <h3>Купон на знижку</h3>
              <label>
                Введіть номер купону
                <input type="text" placeholder="Номер купону" />
              </label>
              <button
                className={`${css.cartsBtn} secondaryBtn`}
                type="button"
                onClick={() => console.log('apply coupon')}
              >
                застосувати купон
              </button>
            </form>
            <div className={css.buyBox}>
              <div>
                <div>
                  <p>Ціна</p>
                  <p>₴ {getTotalPrice(inCart)}</p>
                </div>
                <div>
                  <p>Загальна вартість</p>
                  <p>₴ {getTotalPrice(inCart)}</p>
                </div>
              </div>

              <Link to={'/delivery'} className={`${css.toPayment} primaryBtn`}>
                перейти до оплати
                <svg width={14} height={9}>
                  <use href={`${sprite}#arrow-right`} />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </ContainerLimiter>
    </>
  );
};
export default Cart;
