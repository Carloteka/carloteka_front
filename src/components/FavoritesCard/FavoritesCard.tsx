import css from './FavoritesCard.module.scss';
import { useContext } from 'react';
import { CartContext, FavoritesContext } from '../Layout';
import sprite from '../../images/sprite.svg';
import { toggleLocalStorage, checkLocalStorage } from '../../utils';
import { Good } from '../../../@types/custom';

interface FavoritesCardProps {
  good: Good;
  onClickDelete: (id: number) => void;
}

export const FavoritesCard = ({ good, onClickDelete }: FavoritesCardProps) => {
  const { image_set, name, price, id, stars } = good;

  const { setAmountInCart } = useContext(CartContext);
  const { setAmountInFavorites } = useContext(FavoritesContext);

  function buyBtnHandle() {
    setAmountInFavorites((amountInFavorites: number) => amountInFavorites - 1);
    onClickDelete(id);
    const cartArray = checkLocalStorage('cart', []);
    if (cartArray.some((el: { id: number }) => el.id === id)) {
      return;
    }
    setAmountInCart((amountInCart: number) => amountInCart + 1);
    toggleLocalStorage(false, 'cart', good);
  }

  // useEffect(() => {
  //   if (location.pathname.includes('cart')) {
  //     if (!localStorage.getItem('cart')) {
  //       localStorage.setItem('cart', JSON.stringify([]));
  //     }

  //     const newArray = JSON.parse(localStorage.getItem('cart') as string);

  //     const temp = newArray.find(
  //       (el: { id: string }) => el.id === good.id_name,
  //     );

  //     setQuantity(temp.amount);
  //   }
  // }, [quantity]);

  return (
    <>
      <img
        className={css.img}
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
      <h4 className={css.name}>Декоративна ваза з натурального дерева</h4>

      <div className={css.flexDiv}>
        <ul>
          {[0, 1, 2, 3, 4].map((index) => (
            <li key={index}>
              <svg style={{ fill: index <= stars ? '#5B5B59' : 'transparent' }}>
                <use href={`${sprite}#star`} />
              </svg>
            </li>
          ))}
        </ul>
        {stars}
      </div>

      <p className={css.price}>₴ {price}</p>

      <button
        className={css.delBtn}
        type="button"
        onClick={() => {
          setAmountInFavorites(
            (amountInFavorites: number) => amountInFavorites - 1,
          );
          onClickDelete(id);
        }}
      >
        <svg width={8} height={8}>
          <use href={`${sprite}#close`} />
        </svg>
      </button>

      <button
        type="button"
        className={`primaryBtn ${css.buyBtn}`}
        onClick={() => buyBtnHandle()}
      >
        Купити
      </button>
    </>
  );
};
