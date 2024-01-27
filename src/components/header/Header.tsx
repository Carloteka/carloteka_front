import {
  HeaderContainer,
  LimiterConatiner,
  Logo,
  Catalog,
  Actions,
  NavigationLink,
  CartMenuBtn,
  BurgerMenuBtn,
  CartCounter,
} from './Header.styled';
import sprite from '../../images/sprite.svg';
import { SearchBar } from './SearchBar/SearchBar';
import { Menu } from './menu/Menu';
import { MenuCart } from './menu/MenuCart';
import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../Layout';

export const Header = () => {
  const { amountInCart } = useContext(CartContext);

  const [showMenu, setShowMenu] = useState(false);
  const [showCartMenu, setShowCartMenu] = useState(false);
  const [inCart, setInCart] = useState<string[]>([]);

  let goodsInCart: string[] = [];

  useEffect(() => {
    if (localStorage.getItem('cart')) {
      goodsInCart = JSON.parse(localStorage.getItem('cart') as string);
    }
    if (inCart.length === goodsInCart.length) {
      return;
    }
    setInCart(goodsInCart);
  }, [setInCart, inCart, goodsInCart]);

  function burgerMenuHandler() {
    document.body.style.overflowY = 'hidden';
    setShowMenu(true);
  }

  function onClose() {
    document.body.style.overflowY = 'auto';
    setShowMenu(false);
  }

  return (
    <HeaderContainer>
      <LimiterConatiner>
        <Logo to={'/'}>Brand Logo</Logo>
        <Catalog to={'/catalog'} title="На стрінку Товарів">
          Каталог
        </Catalog>
        <SearchBar />
        <Actions>
          <NavigationLink to={'/favorites'} title="На сторінку Обраних">
            <svg width={24} height={24}>
              <use href={`${sprite}#favorite`} />
            </svg>
          </NavigationLink>
          <CartMenuBtn
            onClick={() => inCart?.length > 0 && setShowCartMenu(true)}
            title={inCart?.length > 0 ? 'Меню Кошика' : 'Кошик пустий'}
          >
            <svg width={24} height={24}>
              <use href={`${sprite}#cart`} />
            </svg>
            {inCart?.length > 0 && <CartCounter>{amountInCart}</CartCounter>}
          </CartMenuBtn>

          <BurgerMenuBtn
            type="button"
            title="Меню"
            onClick={() => burgerMenuHandler()}
          >
            <svg width={18} height={12}>
              <use href={`${sprite}#burger-menu`} />
            </svg>
          </BurgerMenuBtn>
        </Actions>
        <Menu onClickHandle={onClose} showMenu={showMenu} />

        <MenuCart onClickHandle={setShowCartMenu} showCartMenu={showCartMenu} />
      </LimiterConatiner>
    </HeaderContainer>
  );
};
