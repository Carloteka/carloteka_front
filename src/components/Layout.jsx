import { Suspense, createContext, useState, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from './Loader/Loader';
import { Header } from './header/Header';
import { PageTitle } from './pageTitle/PageTitle';
import { Footer } from './footer/Footer';
import { MenuCart } from './MenuCart/MenuCart';
import { Menu } from './Menu/Menu';
import { checkLocalStorage } from '../utils';

export const CartContext = createContext({
  amountInCart: 0,
  setAmountInCart: (state) => {
    state;
  },
});
export const FavoritesContext = createContext({
  amountInFavorites: 0,
  setAmountInFavorites: (state) => {
    state;
  },
});

const Layout = () => {
  const cartArray = checkLocalStorage('cart', []);
  const favoritesArray = checkLocalStorage('favorite', []);

  const [amountInCart, setAmountInCart] = useState(cartArray?.length);
  const [amountInFavorites, setAmountInFavorites] = useState(
    favoritesArray?.length,
  );

  const valueCart = useMemo(
    () => ({ amountInCart, setAmountInCart }),
    [amountInCart],
  );
  const valueFavorites = useMemo(
    () => ({ amountInFavorites, setAmountInFavorites }),
    [amountInFavorites],
  );

  const [showMenu, setShowMenu] = useState(false);
  const [showCartMenu, setShowCartMenu] = useState(false);

  function onClose() {
    document.body.style.overflowY = 'auto';
    setShowMenu(false);
    setShowCartMenu(false);
  }

  return (
    <FavoritesContext.Provider value={valueFavorites}>
      <CartContext.Provider value={valueCart}>
        <>
          <Header setShowCartMenu={setShowCartMenu} setShowMenu={setShowMenu} />
          <PageTitle />
          <main>
            <Menu
              onClickHandle={onClose}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
            />

            <MenuCart onClickHandle={onClose} showCartMenu={showCartMenu} />

            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </main>

          <Footer />
        </>
      </CartContext.Provider>
    </FavoritesContext.Provider>
  );
};

export default Layout;
