import css from './Header.module.scss';
import { useState, useEffect, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { CartContext, FavoritesContext } from '../Layout';
import { SearchBar } from './SearchBar/SearchBar';
import sprite from '../../images/sprite.svg';
import { checkLocalStorage } from '../../utils';

interface HeaderProps {
  setShowMenu: (arg0: boolean) => void;
  setShowCartMenu: (arg0: boolean) => void;
}

export const Header = ({ setShowCartMenu, setShowMenu }: HeaderProps) => {
  const { amountInCart } = useContext(CartContext);
  const { amountInFavorites } = useContext(FavoritesContext);

  const [inCart, setInCart] = useState<object[]>([]);
  const [inFavorites, setInFavorites] = useState<object[]>([]);

  let goodsInCart: object[] = [];
  let goodsInFavorites: object[] = [];

  useEffect(() => {
    goodsInCart = checkLocalStorage('cart', []);

    if (inCart.length === goodsInCart.length) {
      return;
    }

    setInCart(goodsInCart);
  }, [setInCart, inCart, goodsInCart]);

  useEffect(() => {
    goodsInFavorites = checkLocalStorage('favorite', []);

    if (inFavorites.length === goodsInFavorites.length) {
      return;
    }

    setInFavorites(goodsInFavorites);
  }, [setInFavorites, inFavorites, goodsInFavorites]);

  function openMenu() {
    document.body.style.overflowY = 'hidden';
  }
  function openCartMenu() {
    openMenu();
    setShowCartMenu(true);
  }

  return (
    <header className={css.header}>
      <div className="limiter">
        <Link to={'/'} className={css.logo}>
          Brand Logo
        </Link>
        <NavLink
          to={'/catalog'}
          title="На сторінку Товарів"
          className={css.catalogLink}
        >
          Каталог
        </NavLink>
        <SearchBar />
        <div className={css.actionsDiv}>
          <NavLink
            to={'/favorites'}
            title="На сторінку Список бажань"
            className={css.favLink}
          >
            <svg width={24} height={24}>
              <use href={`${sprite}#favorite`} />
            </svg>
            {inFavorites?.length > 0 && amountInFavorites > 0 && (
              <span className={css.counter}>{amountInFavorites}</span>
            )}
          </NavLink>
          <button
            onClick={() => openCartMenu()}
            title={inCart?.length > 0 ? 'Меню Кошика' : 'Кошик порожній'}
            className={css.cartMenuBtn}
          >
            <svg width={24} height={24}>
              <use href={`${sprite}#cart`} />
            </svg>
            {inCart?.length > 0 && amountInCart > 0 && (
              <span className={css.counter}>{amountInCart}</span>
            )}
          </button>

          <button
            type="button"
            title="Меню"
            onClick={() => {
              openMenu();
              setShowMenu(true);
            }}
            className={css.burgerBtn}
          >
            <svg width={18} height={12}>
              <use href={`${sprite}#burger-menu`} />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
