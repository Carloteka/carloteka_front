import {
  HeaderContainer,
  LimiterConatiner,
  Logo,
  Catalog,
  Actions,
  NavigationLink,
  CartMenuBtn,
  BurgerMenuBtn,
  Counter,
} from './Header.styled';
import sprite from '../../images/sprite.svg';
import { SearchBar } from './SearchBar/SearchBar';
import { useState, useEffect, useContext } from 'react';
import { CartContext, FavoritesContext } from '../Layout';
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
    <HeaderContainer>
      <LimiterConatiner>
        <Logo to={'/'}>Brand Logo</Logo>
        <Catalog to={'/catalog'} title="На сторінку Товарів">
          Каталог
        </Catalog>
        <SearchBar />
        <Actions>
          <NavigationLink to={'/favorites'} title="На сторінку Список бажань">
            <svg width={24} height={24}>
              <use href={`${sprite}#favorite`} />
            </svg>
            {inFavorites?.length > 0 && amountInFavorites > 0 && (
              <Counter>{amountInFavorites}</Counter>
            )}
          </NavigationLink>
          <CartMenuBtn
            onClick={() => openCartMenu()}
            title={inCart?.length > 0 ? 'Меню Кошика' : 'Кошик порожній'}
          >
            <svg width={24} height={24}>
              <use href={`${sprite}#cart`} />
            </svg>
            {inCart?.length > 0 && amountInCart > 0 && (
              <Counter>{amountInCart}</Counter>
            )}
          </CartMenuBtn>

          <BurgerMenuBtn
            type="button"
            title="Меню"
            onClick={() => {
              openMenu();
              setShowMenu(true);
            }}
          >
            <svg width={18} height={12}>
              <use href={`${sprite}#burger-menu`} />
            </svg>
          </BurgerMenuBtn>
        </Actions>
      </LimiterConatiner>
    </HeaderContainer>
  );
};
