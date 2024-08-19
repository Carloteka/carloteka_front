import css from './Favorites.module.scss';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../../components/Layout';
import { ContainerLimiter } from 'src/components/containerLimiter/ContainerLimiter.tsx';
import { FavoritesCard } from '../../components/FavoritesCard/FavoritesCard';
import { toggleLocalStorage, checkLocalStorage } from '../../utils';
import sprite from '../../images/sprite.svg';

const Favorites = () => {
  const { setAmountInFavorites } = useContext(FavoritesContext);

  const favoriteGoodsArray = checkLocalStorage('favorite', []);

  const [favorites, setFavorites] = useState(favoriteGoodsArray);

  function clearFavorites() {
    localStorage.favorite = [];
    setFavorites([]);
    setAmountInFavorites(0);
  }

  function delFromFavorite(id) {
    const newArray = favoriteGoodsArray.filter((el) => el.id !== id);
    toggleLocalStorage(true, 'favorite', { id });
    setFavorites(newArray);
  }

  return (
    <>
      <ContainerLimiter>
        <div className={`grid ${css.listHeaderWrapper}`}>
          <p className={css.name}>Товар</p>
          <p className={css.price}>Ціна</p>
          <p className={css.mobVers}>Рейтинг, відгуки та ціна товару</p>
          <p className={css.tablVers}>Рейтинг товару та відгуки</p>
        </div>
        {favorites.length > 0 && (
          <ul className="favorites-cart_list">
            {favorites?.map((el) => (
              <li className={`grid ${css.card} `} key={el.id}>
                <FavoritesCard good={el} onClickDelete={delFromFavorite} />
              </li>
            ))}
          </ul>
        )}

        {favorites?.length > 0 ? (
          <button
            className={`${css.clearBtn} secondaryBtn`}
            type="button"
            onClick={() => clearFavorites()}
          >
            Очистити список бажань
          </button>
        ) : (
          <div className="emptyMessage">
            <svg width={124} height={124}>
              <use href={`${sprite}#favorite`} />
            </svg>
            <h2>Список бажань порожній</h2>
            <Link to={'/catalog'} className={`${css.toCatalog} primaryBtn`}>
              <svg width={14} height={9}>
                <use href={`${sprite}#arrow-right`} />
              </svg>
              повернутись до покупок
            </Link>
          </div>
        )}
      </ContainerLimiter>
    </>
  );
};

export default Favorites;
