import { useState, useContext } from 'react';
import { FavoritesContext } from '../../components/Layout';
import { PageTitle } from 'src/components/pageTitle/PageTitle';
import { ContainerLimiter } from 'src/components/containerLimiter/ContainerLimiter.tsx';
import {
  ListHeaderWrapper,
  Name,
  Price,
  FavoritesList,
  Card,
  Button,
  EmptyMessage,
  GoToCatalog,
} from './Favorites.styled';
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
      <PageTitle page={'favorites'}></PageTitle>
      <ContainerLimiter paddingTopMob={'24px'} paddingTopDesc={'56px'}>
        <ListHeaderWrapper>
          <Name>Товар</Name>
          <Price>Ціна</Price>
          <p className="mobVers">Рейтинг, відгуки та ціна товару</p>
          <p className="tablVers">Рейтинг товару та відгуки</p>
        </ListHeaderWrapper>
        {favorites.length > 0 && (
          <FavoritesList>
            {favorites?.map((el) => (
              <Card key={el.id}>
                <FavoritesCard good={el} onClickDelete={delFromFavorite} />
              </Card>
            ))}
          </FavoritesList>
        )}

        {favorites?.length > 0 ? (
          <Button
            className="secondaryBtn"
            type="button"
            onClick={() => clearFavorites()}
          >
            Очистити список бажань
          </Button>
        ) : (
          <EmptyMessage>
            <svg width={124} height={124}>
              <use href={`${sprite}#favorite`} />
            </svg>
            <h2>Список бажань порожній</h2>
            <GoToCatalog to={'/catalog'} className="primaryBtn">
              <svg width={14} height={9}>
                <use href={`${sprite}#arrow-right`} />
              </svg>
              повернутись до покупок
            </GoToCatalog>
          </EmptyMessage>
        )}
      </ContainerLimiter>
    </>
  );
};

export default Favorites;
