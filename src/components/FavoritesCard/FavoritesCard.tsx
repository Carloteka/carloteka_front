import { useContext } from 'react';
import { CartContext, FavoritesContext } from '../Layout';
import {
  FlexContainer,
  Img,
  Name,
  Price,
  Star,
  DelBtn,
  BuyBtn,
} from './FavoritesCard.styled';
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
      <Img
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
      <Name>Декоративна ваза з натурального дерева</Name>

      <FlexContainer>
        <ul>
          {[0, 1, 2, 3, 4].map((index) => (
            <li key={index}>
              <Star
                style={{ fill: index <= stars ? '#5B5B59' : 'transparent' }}
              >
                <use href={`${sprite}#star`} />
              </Star>
            </li>
          ))}
        </ul>
        {stars}
      </FlexContainer>

      <Price>₴ {price}</Price>

      <DelBtn
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
      </DelBtn>

      <BuyBtn
        type="button"
        className="primaryBtn"
        onClick={() => buyBtnHandle()}
      >
        Купити
      </BuyBtn>
    </>
  );
};
