import css from './CatalogCard.module.scss';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext, FavoritesContext } from '../Layout';
import sprite from '../../images/sprite.svg';
import { toggleLocalStorage, getBanner, checkLocalStorage } from '../../utils';
import { Good as Popular } from '../../../@types/custom';

interface SliderItemProps {
  item: Popular;
}

export const CatalogCard = ({ item }: SliderItemProps) => {
  const { id, name, mini_image, price, stock, slug, stars } = item;

  const { setAmountInCart } = useContext(CartContext);
  const { setAmountInFavorites } = useContext(FavoritesContext);

  const cartArray: { id: number; amount: number }[] = checkLocalStorage(
    'cart',
    [],
  );
  const favoriteArray: { id: number }[] = checkLocalStorage('favorite', []);

  const isInCart: boolean = cartArray.some((el) => el.id === id);
  const isInFavorite: boolean = favoriteArray.some((el) => el.id === id);
  const [inCart, setInCart] = useState(isInCart);
  const [isFavorite, setIsFavorite] = useState(isInFavorite);

  function toggleCart() {
    toggleLocalStorage(inCart, 'cart', item);
    setInCart((prev) => !prev);
    setAmountInCart((amountInCart: number) =>
      isInCart ? amountInCart - 1 : amountInCart + 1,
    );
  }
  function toggleFavorite() {
    toggleLocalStorage(isFavorite, 'favorite', item);
    setIsFavorite((prev) => !prev);
    setAmountInFavorites((amountInFavorites: number) =>
      isFavorite ? amountInFavorites - 1 : amountInFavorites + 1,
    );
  }

  return (
    <>
      <div className={css.thumbPhoto}>
        <button
          type="button"
          onClick={() => toggleFavorite()}
          className={css.favBtn}
        >
          <svg
            style={{
              fill: isFavorite ? '#2d3f24' : 'transparent',
            }}
          >
            <use href={`${sprite}#favorite`} />
          </svg>
        </button>

        {!(stock === 'IN_STOCK') && (
          <p
            className={css.banners}
            style={{
              borderTop: stock === 'BACKORDER' ? '0.5px solid white' : '',
              backgroundColor:
                stock === 'BACKORDER'
                  ? '#2D3F24'
                  : stock === 'SPECIFIC_ORDER'
                  ? '#2864BE'
                  : '#b4a525',
            }}
          >
            {getBanner(stock)}
          </p>
        )}
        <Link to={`/${slug}/description`} state={{ id }}>
          <img
            src={
              import.meta.env.PROD
                ? `http://carloteka.com/${mini_image}`
                : `http://localhost:8000/${mini_image}`
            }
            alt="img першої категорії"
            width={288}
            height={304}
            style={{
              opacity:
                stock === 'OUT_OF_STOCK' || stock === 'SPECIFIC_ORDER'
                  ? '0.5'
                  : '',
              backgroundColor:
                stock === 'OUT_OF_STOCK' || stock === 'SPECIFIC_ORDER'
                  ? '#F2F0EC'
                  : '',
            }}
            loading="lazy"
          />
        </Link>
      </div>
      <h4 className={css.name}>{name}</h4>
      <div className={css.infoDiv}>
        <div className={css.flexBox}>
          <ul>
            {[0, 1, 2, 3, 4].map((index) => (
              <li key={index}>
                <svg
                  style={{ fill: index < stars ? '#5B5B59' : 'transparent' }}
                >
                  <use href={`${sprite}#star`} />
                </svg>
              </li>
            ))}
          </ul>
          {stars}
        </div>
        <p>{price} грн</p>
      </div>
      <button
        type="button"
        style={{ backgroundColor: !inCart ? '#2D3F24' : '#DAD4C8' }}
        onClick={() => toggleCart()}
        disabled={stock === 'OUT_OF_STOCK'}
        className={css.cardBtn}
      >
        <svg
          style={{
            fill: !inCart ? 'white' : '#2d3f24',
            padding: inCart ? '3px' : 0,
          }}
        >
          <use href={`${sprite}#${inCart ? 'check-long' : 'cart'}`} />
        </svg>
      </button>
    </>
  );
};
