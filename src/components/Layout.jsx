import { Suspense, createContext, useState, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from './Loader/Loader';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { MenuCart } from './header/menu/MenuCart';
import { Menu } from './header/menu/Menu';

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
  let cartArray = [];
  let favoritesArray = [];

  if (localStorage.getItem('cart')) {
    cartArray = JSON.parse(localStorage.getItem('cart'));
  } else {
    localStorage.setItem('cart', JSON.stringify(cartArray));
  }

  if (localStorage.getItem('favorite')) {
    favoritesArray = JSON.parse(localStorage.getItem('favorite'));
  } else {
    localStorage.setItem('favorite', JSON.stringify(favoritesArray));
  }

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
